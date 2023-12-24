'use client';

import { Product } from '@/app/admin/[id]/page';
import { ProductsService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useEffect, useState } from 'react';
import { SearchDropdown, Loader, ProductCard } from '..';

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
	const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
	const [title, setTitle] = useState('Em Destaque');

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
		if (name === '') return setIsLoading(false);
		setTitle(`Com "${name.slice(0, 10)}..."`);
		const res = await ProductsService.getProducts({ name, order, param });
		setName('');
		setProductsList(res);
		setIsLoading(false);
	};

	return (
		<section className='hero-to-products-gradient p-8 flex flex-col py-12 mx-auto max-w-[1600px]'>
			<div className='w-full flex items-center'>
				<form
					onSubmit={handleSubmit}
					className='flex items-center w-full md:w-[500px]'
				>
					<div className='flex w-full'>
						<input
							type='text'
							className='peer border-light border-e-0 focus:border-sec focus:outline-none text-white border w-full h-12 ps-6 bg-black transition duration-200'
							placeholder='Buscar Produtos'
							value={name}
							onChange={(ev) => setName(ev.currentTarget.value)}
						/>
						<button
							type='submit'
							className='border border-s-0 peer-focus:border-sec h-12 bg-black px-4 flex justify-center items-center transition duration-200'
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
							onMouseEnter={() => setIsSearchDropdownOpen(true)}
							onMouseLeave={() => setIsSearchDropdownOpen(false)}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`w-11 h-11 ms-4 ${isSearchDropdownOpen ? 'text-sec' : 'text-light'}`}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
							/>
						</svg>
					</button>
				</form>
			</div>
			{isSearchDropdownOpen && (
				<SearchDropdown
					order={order}
					param={param}
					setOrder={setOrder}
					setParam={setParam}
					setIsDropdownOpen={setIsSearchDropdownOpen}
				/>
			)}
			<div className='flex flex-col gap-12 py-12'>
				<h1 className='ms-2 sm:ms-6 md:ms-12 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-gradient font-bold'>
					Produtos {title}
				</h1>
				{isLoading ? (
					<Loader />
				) : productsList?.total === 0 ? (
					<article className='w-full bg-black rounded-lg flex justify-center items-center py-16'>
						<h3 className='text-light font-bold italic text-2xl'>Nenhum produto encontrado :(</h3>
					</article>
				) : (
					productsList?.products?.map((prod) => (
						<ProductCard
							key={prod.id}
							product={prod}
						/>
					))
				)}
			</div>
		</section>
	);
};
