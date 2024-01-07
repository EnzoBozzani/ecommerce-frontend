'use client';

import Link from 'next/link';
import { Footer, ProductArea, Loader } from '@/src/components';
import { ProductsService } from '@/src/services';
import { useEffect, useState } from 'react';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useScreenWidth } from '@/src/hooks/useScreenWidth';

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	images: [string | null, string | null, string | null];
	num_favorites?: number;
	in_stock: number;
	featured: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

function ProductPage({ params }: { params: { id: string } }) {
	const [product, setProduct] = useState<Product>();
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState<UserDecodedToken>();
	const width = useScreenWidth();

	useEffect(() => {
		const fetchProduct = async () => {
			const prod: Product = await ProductsService.getProductByID(+params.id);
			setProduct(prod);
			const token = localStorage.getItem('ecommerce-token');
			if (token) {
				const decoded = verifyToken(token);
				setUser(decoded);
			}
			setIsLoading(false);
		};
		fetchProduct();
	}, []);

	return (
		<main className='w-full min-h-screen bg-light'>
			<header className='w-full bg-light border-b p-2 md:p-4 flex items-center justify-between border-b border-b-dark/20'>
				<Link
					href='/'
					className='flex items-center justify-center gap-2'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-8 h-8 mb-1'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
						/>
					</svg>
				</Link>
				{width >= 1024 && (
					<div className='flex items-center gap-4'>
						<Link href={!user ? '/login' : '/user/favorites'}>
							<div className='flex items-center gap-2 group'>
								<p className='text-dark text-xl group-hover:text-primaryLight'>Favoritos</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-8 h-8 group-hover:text-primaryLight'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
									/>
								</svg>
							</div>
						</Link>
						<Link href={!user ? '/login' : '/user/purchases'}>
							<div className='flex items-center gap-2 group'>
								<p className='text-dark text-xl group-hover:text-primaryLight'>Compras</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-8 h-8 group-hover:text-primaryLight'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
									/>
								</svg>
							</div>
						</Link>
						<Link
							href={!user ? '/login' : '/user'}
							className='flex gap-2 items-center group rounded-lg border-2 border-dark/20 px-4 py-2 hover:border-primaryLight'
						>
							<h6 className='text-lg sm:text-xl text-dark/50 group-hover:text-dark'>
								{!user?.firstName ? 'Entrar' : `Bem vindo, ${user?.firstName}!`}
							</h6>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-10 h-10 text-dark/50 group-hover:text-dark'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
							</svg>
						</Link>
					</div>
				)}
			</header>
			{isLoading ? <Loader /> : <ProductArea product={product} />}
			<Footer
				selected='home'
				user={user}
			/>
		</main>
	);
}

export default ProductPage;
