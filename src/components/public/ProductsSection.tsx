'use client';

import { Product } from '@/app/admin/[id]/page';
import { ProductsService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useEffect, useState } from 'react';
import { SearchDropdown, Loader, ProductCard } from '..';

export interface ProductsList {
	products: Product[];
	total: number;
	perPage: number;
	page: number;
}

interface Props {
	productsList: ProductsList | undefined;
	title: string;
	isLoading: boolean;
}

export const ProductsSection: FC<Props> = ({ productsList, title, isLoading }) => {
	// const router = useRouter();
	// const [productsList, setProductsList] = useState<ProductsList>();
	// const [name, setName] = useState('');
	// const [param, setParam] = useState<'num_favorites' | 'price'>('price');
	// const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
	// const [isLoading, setIsLoading] = useState(true);
	// const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
	// const [title, setTitle] = useState('Em Destaque');

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const res = await ProductsService.getFeaturedProducts();
	// 		setProductsList(res);
	// 		setIsLoading(false);
	// 	};
	// 	fetchProducts();
	// }, []);

	// const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
	// 	ev.preventDefault();
	// 	setIsLoading(true);
	// 	if (name === '') return setIsLoading(false);
	// 	setTitle(name.length > 10 ? `Com "${name.slice(0, 10)}..."` : `Com "${name}"`);
	// 	const res = await ProductsService.getProducts({ name, order, param });
	// 	setName('');
	// 	setProductsList(res);
	// 	setIsLoading(false);
	// };

	return (
		<section className='hero-to-products-gradient p-8 flex flex-col py-12 mx-auto max-w-[1600px]'>
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
