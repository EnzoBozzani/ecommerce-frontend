'use client';

import { Product } from '@/app/admin/[id]/page';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Loader, ProductCard } from '..';

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
	const router = useRouter();

	return (
		<section className='bg-light p-4 flex flex-col mx-auto max-w-[1600px]'>
			<div className='flex flex-col gap-6 py-12 items-center'>
				<h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl text-dark mb-6'>Produtos {title}</h1>
				{isLoading ? (
					<Loader />
				) : productsList?.total === 0 ? (
					<article className='w-2/3 rounded-xl text-dark border border-dark/20 flex justify-center items-center h-[208px]'>
						<h3 className='italic text-2xl'>Nenhum produto encontrado :(</h3>
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
