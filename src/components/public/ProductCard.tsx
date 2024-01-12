'use client';

import { Product } from '@/app/admin/[id]/page';
import { useScreenWidth } from '@/src/hooks/useScreenWidth';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
	product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
	const width = useScreenWidth();

	return (
		<Link
			href={`/${product.id}`}
			className='ps-2 flex justify-between items-center gap-4 bg-lightGray hover:shadow-2xl border border-dark/20 w-full lg:w-2/3 rounded-xl text-dark h-[130px] xs:h-[208px] hover:border-primaryLight'
		>
			<div className='flex justify-center items-center'>
				<Image
					alt={`${product.name} image1`}
					src={`http://${product.images[0]}`}
					height={200}
					width={200}
					className='rounded-xl max-h-[130px] max-w-[100px] xs:max-h-[208px] xs:max-w-[160px]'
				/>
			</div>
			<div className='h-full w-full flex flex-col'>
				<div className='h-full flex flex-col gap-3 pt-6 xs:pt-12'>
					<h3 className='text-lg sm:text-2xl'>
						{width < 500 && product.name.length > 12 ? product.name.slice(0, 12) + '...' : product.name}
					</h3>
					<h2 className='text-dark/50 text-lg sm:text-2xl'>
						{product.price.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
							minimumFractionDigits: 2,
						})}
					</h2>
				</div>
				<div className='h-full flex justify-end items-end'>
					<div className='flex items-center gap-2 mb-4 mr-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-8 h-8 xs:w-10 xs:h-10 text-yellow-300'
						>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
								clipRule='evenodd'
							/>
						</svg>

						<p className='text-dark text-xl sm:text-2xl'>{product.num_favorites}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
