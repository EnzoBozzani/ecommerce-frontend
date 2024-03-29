'use client';

import { FC, useState } from 'react';

export const HeroSectionCarousel: FC = () => {
	const [selected, setSelected] = useState(0);

	const carouselItems = [
		<div
			key={0}
			className='bg-primary py-12 flex flex-col items-center justify-center gap-4 min-h-[300px]'
		>
			<h1 className='text-light text-2xl sm:text-4xl font-bold text-center w-11/12 md:w-2/3'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat.
			</h1>
			<h5 className='text-sec text-center w-11/12 md:w-2/3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quam, numquam et tenetur vero molestiae
				dolorem accusantium assumenda porro?
			</h5>
			<button className='bg-dark shadowEffect rounded border border-black px-8 py-2'>
				<span className='text-gradient font-bold uppercase'>Lorem ipsum</span>
			</button>
		</div>,
		<div
			key={1}
			className='bg-gradient-to-r from-primaryLight to-sec py-12 flex flex-col items-center justify-center gap-4 min-h-[300px]'
		>
			<h1 className='text-light text-2xl sm:text-4xl font-bold text-center w-11/12 md:w-2/3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iste?
			</h1>
		</div>,
		<div
			key={2}
			className='bg-sec py-12 flex flex-col items-center justify-center gap-4 min-h-[300px]'
		>
			<h1 className='text-light text-2xl sm:text-4xl font-bold text-center w-11/12 md:w-2/3'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat.
			</h1>
			<button className='bg-dark shadowEffect rounded border border-black px-8 py-2'>
				<span className='text-gradient font-bold uppercase'>Faça Parte</span>
			</button>
		</div>,
	];

	return (
		<div className='flex items-center justify-center my-4'>
			<button
				onClick={() => {
					setSelected((prev) => (prev === 0 ? 2 : prev - 1));
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-10 h-10 hover:text-sec'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5 8.25 12l7.5-7.5'
					/>
				</svg>
			</button>
			{carouselItems[selected]}
			<button
				onClick={() => {
					setSelected((prev) => (prev === 2 ? 0 : prev + 1));
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-10 h-10 hover:text-sec'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m8.25 4.5 7.5 7.5-7.5 7.5'
					/>
				</svg>
			</button>
		</div>
	);
};
