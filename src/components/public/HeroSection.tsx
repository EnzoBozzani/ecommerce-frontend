import { FC } from 'react';
import { Logo } from '..';
import Link from 'next/link';

export const HeroSection: FC = () => {
	return (
		<section className='w-11/12 bg-primary flex flex-col p-8 mx-auto max-w-[1200px]'>
			<div className='w-full flex'>
				<div className='flex gap-4 items-center'>
					<Logo className='w-12 h-12 text-light' />
					<h3 className='text-xl sm:text-2xl text-light'>Logo</h3>
				</div>
			</div>
			<div className='w-full pt-12 flex flex-col items-center justify-center gap-4'>
				<h1 className='text-light text-2xl sm:text-4xl font-bold text-center w-11/12 md:w-2/3'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat.
				</h1>
				<h5 className='text-dark text-center w-11/12 md:w-2/3'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quam, numquam et tenetur vero
					molestiae dolorem accusantium assumenda porro?
				</h5>
				<Link
					href={'/register'}
					className='bg-dark shadowEffect rounded border border-black px-8 py-2 mt-12'
				>
					<button className='text-gradient font-bold uppercase'>Faça Parte</button>
				</Link>
			</div>
		</section>
	);
};
