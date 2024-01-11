'use client';

import { Product } from '@/app/[id]/page';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader } from '..';
import FavoritesService from '@/src/services/FavoritesService';

interface Props {
	product: Product | undefined;
	width: number;
}

export const ProductArea: FC<Props> = ({ product, width }) => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [isFavorited, setIsFavorited] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchIsFavorited = async () => {
			const res = await FavoritesService.isProductFavorited(+product!.id);
			if (res.favorited) {
				setIsFavorited(true);
				return setIsLoading(false);
			}
			setIsFavorited(false);
			setIsLoading(false);
		};
		fetchIsFavorited();
	}, []);

	const handleClickToFavoriteProduct = async () => {
		setIsLoading(true);

		location.reload();
	};

	if (isLoading)
		return (
			<div className='w-full min-h-screen flex justify-center items-center bg-dark'>
				<Loader />
			</div>
		);

	return (
		<>
			<section className='mx-auto max-w-screen-xl flex flex-col lg:flex-row pt-16 px-6'>
				{width < 1024 && <h1 className='pb-12 text-3xl lg:text-5xl text-justify'>{product!.name}</h1>}
				<div className='w-full lg:w-1/2 lg:h-[500px]'>
					<div className='lg:h-full w-full flex flex-col gap-8 justify-center items-center'>
						<div className='lg:w-full flex items-center'>
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
							<div className='w-full h-[200px] sm:h-[400px] flex justify-center items-center'>
								<Image
									alt={`${product!.name} image ${selectedImage + 1}`}
									src={`http://${product!.images[selectedImage]}`}
									width={400}
									height={400}
									className='max-h-[260px] max-w-[200px] sm:max-h-[520px] sm:max-w-[400px]'
								/>
							</div>
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
								<div
									key={i}
									className={`cursor-pointer w-[50px] h-[50px] flex justify-center items-center ${
										i === selectedImage ? 'border-2 border-primaryLight' : ''
									}`}
								>
									<Image
										alt={`${product!.name} image ${i + 1}`}
										src={`http://${src}`}
										width={50}
										height={50}
										onClick={() => setSelectedImage(i)}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='sm:ps-12 w-full lg:w-1/2 lg:h-[500px] flex flex-col lg:justify-between gap-8 lg:gap-4 pb-20 pt-12 lg:py-24'>
					{width >= 1024 && <h1 className='text-4xl lg:text-5xl text-justify'>{product!.name}</h1>}
					<div className='w-full flex flex-col gap-4 lg:gap-8'>
						<div className='rounded-xl border border-dark p-6 flex flex-col'>
							<h3 className='text-xl md:text-4xl'>
								{product!.price.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
									minimumFractionDigits: 2,
								})}
							</h3>
						</div>
						<Link href={`/purchase/${product!.id}`}>
							<button className='w-full border rounded-xl px-2 py-3 xs:px-4 xs:py-6 bg-primaryLight text-light text-xl xs:text-3xl'>
								Comprar
							</button>
						</Link>
					</div>
				</div>
			</section>
			<div className='mx-auto px-6 lg:pt-12 pb-36 lg:pb-24 max-w-screen-xl flex flex-col gap-8'>
				<h1 className='text-4xl lg:text-5xl text-justify'>Descrição</h1>
				<p className='text-justify'>{product!.description}</p>
				{isFavorited ? (
					<button
						onClick={() => handleClickToFavoriteProduct()}
						className='rounded text-light mx-auto w-[150px] border border-light bg-red-500 px-4 py-2 flex justify-center items-center gap-2'
					>
						<p>Desfavoritar</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				) : (
					<button
						onClick={() => handleClickToFavoriteProduct()}
						className='rounded text-light mx-auto w-[150px] border border-light bg-yellow-500 px-4 py-2 flex justify-center items-center gap-2'
					>
						<p>Favoritar</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				)}
			</div>
		</>
	);
};
