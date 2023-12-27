import { Dispatch, FC, FormEventHandler, SetStateAction } from 'react';
import { Logo, SearchDropdown } from '..';
import Link from 'next/link';
import { UserDecodedToken } from '@/src/utils/verifyToken';
import { useScreenWidth } from '@/src/hooks/useScreenWidth';

interface Props {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	name: string;
	setName: Dispatch<SetStateAction<string>>;
	isSearchDropdownOpen: boolean;
	setIsSearchDropdownOpen: Dispatch<SetStateAction<boolean>>;
	order: 'ASC' | 'DESC';
	setOrder: Dispatch<SetStateAction<'ASC' | 'DESC'>>;
	param: 'price' | 'num_favorites';
	setParam: Dispatch<SetStateAction<'price' | 'num_favorites'>>;
	user: UserDecodedToken | undefined;
}

export const Header: FC<Props> = ({
	handleSubmit,
	name,
	setName,
	isSearchDropdownOpen,
	setIsSearchDropdownOpen,
	order,
	setOrder,
	param,
	setParam,
	user,
}) => {
	const width = useScreenWidth();

	return (
		<div className='border-b border-b-dark/20 w-full flex items-center justify-between px-2 md:px-8 py-4'>
			<div className='flex gap-1 sm:gap-4 items-center w-full lg:w-auto'>
				<button onClick={() => location.reload()}>
					<Logo className='w-12 h-12 text-primaryLight' />
				</button>
				<form
					onSubmit={handleSubmit}
					className='flex items-center w-full lg:w-[500px]'
				>
					<div className='flex w-full'>
						<input
							type='text'
							className='text-sm sm:text-base peer rounded-l-xl border border-dark/20 border-e-0 focus:border-primaryLight focus:border-2 focus:outline-none text-dark w-full h-12 ps-3 sm:ps-6 bg-light transition duration-200'
							placeholder='Buscar Produtos'
							value={name}
							onChange={(ev) => setName(ev.currentTarget.value)}
						/>
						<button
							type='submit'
							className='border rounded-r-xl border-dark/20 border peer-focus:border-primaryLight peer-focus:border-2 peer-focus:border-s-0 t h-12 bg-light px-2 sm:px-4 flex justify-center items-center transition duration-200'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8 text-dark'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</button>
					</div>
					<button
						type='button'
						className={`flex items-center gap-2 ms-2 ${isSearchDropdownOpen ? 'text-sec' : 'text-dark'}`}
						onMouseEnter={() => setIsSearchDropdownOpen(true)}
						onMouseLeave={() => setIsSearchDropdownOpen(false)}
					>
						{width >= 1024 && <p className='text-xl'>Ordenar</p>}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`w-8 h-8`}
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
			{width >= 1024 && (
				<div className='flex items-center gap-2'>
					<Link href={!user ? '/login' : '/user/favorites'}>
						<div className='flex items-center gap-2'>
							<p className='text-dark text-xl'>Favoritos</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
								/>
							</svg>
						</div>
					</Link>
					<Link href={!user ? '/login' : '/user/purchases'}>
						<div className='flex items-center gap-2'>
							<p className='text-dark text-xl'>Compras</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
								/>
							</svg>
						</div>
					</Link>
					<Link
						href={'/login'}
						className='flex gap-2 items-center group rounded-lg border-2 border-dark/20 px-4 py-2 hover:border-primaryLight'
					>
						<h6 className='text-lg sm:text-xl text-dark/50 group-hover:text-dark'>
							{!user?.firstName ? 'Entrar' : `Bem vindo, ${user?.firstName}!`}
						</h6>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-10 h-10 text-dark/50 group-hover:text-dark'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
							/>
						</svg>
					</Link>
				</div>
			)}
		</div>
	);
};
