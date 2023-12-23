'use client';

import { FC, useEffect, useState } from 'react';
import { Logo } from '..';
import Link from 'next/link';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';

export const HeroSection: FC = () => {
	const [user, setUser] = useState<UserDecodedToken>();
	useEffect(() => {
		const token = sessionStorage.getItem('ecommerce-token');
		if (token) {
			verifyToken(token, setUser);
		}
	}, []);

	return (
		<section className='bg-primary flex flex-col p-8 mx-auto max-w-[1600px]'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-4 items-center'>
					<Logo className='w-12 h-12 text-light' />
					<h3 className='text-xl sm:text-2xl text-light font-bold'>Logo</h3>
				</div>
				<div className='flex gap-4 items-center'>
					<h6 className='text-lg sm:text-xl text-light'>
						{!user?.firstName ? 'Entrar' : `Bem vindo, ${user?.firstName}!`}
					</h6>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-14 h-14 text-light'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
							/>
						</svg>
					</button>
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
