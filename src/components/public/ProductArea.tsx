'use client';

import { Product } from '@/app/[id]/page';
import { FC, useState } from 'react';
import Image from 'next/image';

interface Props {
	product: Product | undefined;
}

export const ProductArea: FC<Props> = ({ product }) => {
	const [selectedImage, setSelectedImage] = useState(0);

	return (
		<section className='mx-auto max-w-screen-xl flex py-16 px-6'>
			<div className='w-full lg:w-1/2 h-[500px]'>
				<div className='h-full w-full flex flex-col  justify-center items-center'>
					<div className='w-full flex items-center'>
						<button
							onClick={() =>
								setSelectedImage((prev) => (prev === 0 ? product!.images.length - 1 : prev - 1))
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-12 h-12'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 19.5 8.25 12l7.5-7.5'
								/>
							</svg>
						</button>
						<Image
							alt={`${product!.name} image ${selectedImage + 1}`}
							src={`http://${product!.images[selectedImage]}`}
							width={300}
							height={300}
							className='w-full h-auto'
						/>
						<button
							onClick={() =>
								setSelectedImage((prev) => (prev === product!.images.length - 1 ? 0 : prev + 1))
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-12 h-12'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m8.25 4.5 7.5 7.5-7.5 7.5'
								/>
							</svg>
						</button>
					</div>
					<div className='flex items-center gap-4'>
						{product!.images.map((src, i) => (
							<Image
								key={i}
								alt={`${product!.name} image ${i + 1}`}
								src={`http://${src}`}
								width={50}
								height={50}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='ps-12 w-full lg:w-1/2 h-[500px] flex flex-col justify-between gap-4 py-24'>
				<h1 className='text-5xl text-justify'>{product!.name}</h1>
				<div className='w-full flex flex-col gap-8'>
					<div className='rounded-xl border border-dark p-6 flex flex-col'>
						<h3 className='text-4xl'>
							{product!.price.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
								minimumFractionDigits: 2,
							})}
						</h3>
					</div>
					<button className='w-full border rounded-xl px-4 py-6 bg-primaryLight text-light text-3xl'>
						Comprar
					</button>
				</div>
			</div>
		</section>
	);
};
