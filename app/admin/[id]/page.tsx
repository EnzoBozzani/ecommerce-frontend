'use client';

import { AdminEditProductForm, Loader } from '@/src/components';
import { ProductsService } from '@/src/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Params {
	params: {
		id: string;
	};
}

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	images: [File | null, File | null, File | null];
	num_favorites?: number;
	in_stock: number;
	featured: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

function AdminEditProduct({ params }: Params) {
	const router = useRouter();
	const [product, setProduct] = useState<Product>();
	const [isLoading, setIsLoading] = useState(true);
	const id = params.id;

	useEffect(() => {
		const fetchProduct = async () => {
			if (!sessionStorage.getItem('ecommerce-admin-token')) return router.push('/admin');
			const prod: Product = await ProductsService.getProductByID(+id);
			setProduct(prod);
			setIsLoading(false);
		};
		fetchProduct();
	}, []);

	if (isLoading) return <Loader />;

	return (
		<main className='min-w-full min-h-full bg-gradient-to-b from-black to-dark py-24'>
			<Link href={'/admin'}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-8 h-8 sm:w-12 sm:h-12 fixed top-4 left-4 text-light'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
					/>
				</svg>
			</Link>
			<AdminEditProductForm product={product} />
		</main>
	);
}

export default AdminEditProduct;
