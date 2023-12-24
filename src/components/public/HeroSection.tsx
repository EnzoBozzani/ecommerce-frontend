'use client';

import { FC, FormEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Logo, SearchDropdown } from '..';
import Link from 'next/link';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { ProductsList } from './ProductsSection';
import { ProductsService } from '@/src/services';

interface Props {
	setProductsList: Dispatch<SetStateAction<ProductsList | undefined>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setTitle: Dispatch<SetStateAction<string>>;
}

export const HeroSection: FC<Props> = ({ setProductsList, setIsLoading, setTitle }) => {
	const [user, setUser] = useState<UserDecodedToken>();
	const [name, setName] = useState('');
	const [param, setParam] = useState<'num_favorites' | 'price'>('price');
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
	const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

	useEffect(() => {
		const token = sessionStorage.getItem('ecommerce-token');
		if (token) {
			verifyToken(token, setUser);
		}
		const fetchProducts = async () => {
			const res = await ProductsService.getFeaturedProducts();
			setProductsList(res);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		setIsLoading(true);
		if (name === '') return setIsLoading(false);
		setTitle(name.length > 10 ? `Com "${name.slice(0, 10)}..."` : `Com "${name}"`);
		const res = await ProductsService.getProducts({ name, order, param });
		setName('');
		setProductsList(res);
		setIsLoading(false);
	};

	return (
		<section className='bg-primary flex flex-col p-8 mx-auto max-w-[1600px]'>
			<div className='w-full flex items-center justify-between'>
				<div className='flex gap-4 items-center'>
					<Logo className='w-12 h-12 text-light' />
					<form
						onSubmit={handleSubmit}
						className='flex items-center w-full md:w-[500px]'
					>
						<div className='flex w-full'>
							<input
								type='text'
								className='peer border-light border-e-0 focus:border-sec focus:outline-none text-white border w-full h-12 ps-6 bg-black transition duration-200'
								placeholder='Buscar Produtos'
								value={name}
								onChange={(ev) => setName(ev.currentTarget.value)}
							/>
							<button
								type='submit'
								className='border border-s-0 peer-focus:border-sec h-12 bg-black px-4 flex justify-center items-center transition duration-200'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-8 h-8 text-white'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
									/>
								</svg>
							</button>
						</div>
						<button type='button'>
							<svg
								onMouseEnter={() => setIsSearchDropdownOpen(true)}
								onMouseLeave={() => setIsSearchDropdownOpen(false)}
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className={`w-11 h-11 ms-4 ${isSearchDropdownOpen ? 'text-sec' : 'text-light'}`}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
								/>
							</svg>
						</button>
					</form>
				</div>
				{isSearchDropdownOpen && (
					<SearchDropdown
						order={order}
						param={param}
						setOrder={setOrder}
						setParam={setParam}
						setIsDropdownOpen={setIsSearchDropdownOpen}
					/>
				)}
				<Link
					href={'/login'}
					className='flex gap-4 items-center group'
				>
					<h6 className='text-lg sm:text-xl text-light group-hover:text-sec'>
						{!user?.firstName ? 'Entrar' : `Bem vindo, ${user?.firstName}!`}
					</h6>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-14 h-14 text-light group-hover:text-sec'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
						/>
					</svg>
				</Link>
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
