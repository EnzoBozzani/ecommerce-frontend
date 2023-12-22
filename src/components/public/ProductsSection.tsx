'use client';

import { Product } from '@/app/admin/[id]/page';
import { ProductsService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useEffect, useState } from 'react';
import { Loader, ProductCard } from '..';

interface ProductsList {
	products: Product[];
	total: number;
	perPage: number;
	page: number;
}

export const ProductsSection: FC = () => {
	const router = useRouter();
	const [productsList, setProductsList] = useState<ProductsList>();
	const [name, setName] = useState('');
	const [param, setParam] = useState<'num_favorites' | 'price'>('price');
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await ProductsService.getFeaturedProducts();
			setProductsList(res);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		setIsLoading(true);
		const res = await ProductsService.getProducts({ name, order, param });
		setProductsList(res);
		setIsLoading(false);
	};

	return (
		<section className='w-11/12 flex flex-col py-12 mx-auto max-w-[1200px]'>
			<div className='w-full flex items-center justify-between'>
				<form
					onSubmit={handleSubmit}
					className='flex items-center w-[250px] md:w-[500px]'
				>
					<div className='flex'>
						<input
							type='text'
							className='peer border-light border-e-0 focus:border-primaryLight focus:outline-none text-white border w-full h-12 px-6 bg-black transition duration-200'
							placeholder='Buscar Produtos'
							value={name}
							onChange={(ev) => setName(ev.currentTarget.value)}
						/>
						<button
							type='submit'
							className='border border-s-0 peer-focus:border-primaryLight h-12 bg-black px-4 flex justify-center items-center transition duration-200'
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
					</div>
					<button type='button'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-11 h-11 ms-4 text-light hover:text-primaryLight'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
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
						className='w-14 h-14 text-primaryLight'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
						/>
					</svg>
				</button>
			</div>
			{isLoading ? <Loader /> : productsList?.products?.map((prod) => <ProductCard product={prod} />)}
		</section>
	);
};
