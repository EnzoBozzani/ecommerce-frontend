'use client';

import { Product } from '@/app/admin/[id]/page';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
	product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
	return (
		<Link
			href={`/${product.id}`}
			className='bg-lightGray hover:shadow-2xl border border-dark/20 flex w-2/3 rounded-xl text-dark h-[208px] hover:border-primaryLight cursor-pointer'
		>
			<div className='w-1/4'>
				<Image
					alt={`${product.name} image1`}
					src={`http://${product.images[0]}`}
					height={200}
					width={200}
					className='rounded-s-xl h-[208px] w-[160px]'
				/>
			</div>
			<div className='w-1/4 h-full flex flex-col gap-5 pt-12'>
				<h3 className='text-2xl'>{product.name}</h3>
				<h2 className='text-dark/50 text-2xl'>
					{product.price.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 2,
					})}
				</h2>
			</div>
			<div className='w-1/4 h-full flex flex-col pt-12'>
				<p className='text-lg text-justify'>{product.description}</p>
			</div>
			<div className='w-1/4 flex justify-end items-end p-4'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-10 h-10'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
					/>
				</svg>
			</div>
		</Link>
	);
};
