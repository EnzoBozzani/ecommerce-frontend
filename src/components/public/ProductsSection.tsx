'use client';

import { Product } from '@/app/admin/[id]/page';
import { ProductsService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { Loader } from '..';

export const ProductsSection: FC = () => {
	const router = useRouter();
	const [products, setProducts] = useState<Product[]>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const { products, total } = await ProductsService.getFeaturedProducts();
			setProducts(products);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);

	return (
		<section className='w-11/12 flex flex-col py-12 mx-auto max-w-[1200px]'>
			<div className='w-full flex items-center justify-between'>
				<form className='flex items-center w-[250px] md:w-[500px]'>
					<input
						type='text'
						className='text-white border w-full h-12 px-6 bg-black'
						placeholder='Buscar Produtos'
					/>
					<button
						type='submit'
						className='h-12 bg-black border border-light px-4 flex justify-center items-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-8 h-8 text-white'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</button>
				</form>
				<button>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-14 h-14 text-light'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
						/>
					</svg>
				</button>
			</div>
			{isLoading ? <Loader /> : products?.map((prod) => <span>{prod.name}</span>)}
		</section>
	);
};
