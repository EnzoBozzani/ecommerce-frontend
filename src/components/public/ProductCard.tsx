'use client';

import { Product } from '@/app/admin/[id]/page';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface Props {
	product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {}, [isLiked]);

	return (
		<div className='flex w-full bg-black rounded-xl p-12 text-light'>
			<div className='w-1/4'>
				<Image
					alt={`${product.name} image1`}
					src={`http://${product.images[0]}`}
					height={200}
					width={200}
					className='h-[208px] w-[160px]'
				/>
			</div>
			<div className='w-2/4 flex flex-col'>
				<h3 className='text-light font-bold text-2xl'>{product.name}</h3>
				<h2 className='text-light/50 font-bold text-2xl'>
					{product.price.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 2,
					})}
				</h2>
			</div>
			<div className='w-1/4 flex justify-end items-end'>
				<button onClick={() => setIsLiked((prev) => !prev)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`w-10 h-10 ${
							!isLiked ? 'text-light hover:text-yellow-300/50' : 'text-yellow-300 hover:text-light/50'
						}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
