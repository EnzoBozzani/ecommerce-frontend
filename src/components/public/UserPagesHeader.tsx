'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Logo, ConfirmModal } from '..';
import { useScreenWidth } from '@/src/hooks/useScreenWidth';
import { UserDecodedToken } from '@/src/utils/verifyToken';

interface Props {
	user: UserDecodedToken | undefined;
	selectedPage: 'user' | 'purchases' | 'favorites';
}

export const UserPagesHeader: FC<Props> = ({ user, selectedPage }) => {
	const router = useRouter();
	const width = useScreenWidth();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsModalOpen(true);
	};

	const handleConfirm = () => {
		localStorage.removeItem('ecommerce-token');
		router.push('/');
	};

	if (width <= 1024) {
		return (
			<header className='w-full border-b border-b-dark/20 p-6 flex items-center justify-between'>
				<Link href={'/'}>
					<Logo className='w-14 h-14 text-primaryLight' />
				</Link>

				<button
					onClick={handleClick}
					className='flex items-center gap-2 text-dark hover:text-sec'
				>
					<h3 className='text-xl'>Sair</h3>
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
							d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
						/>
					</svg>
				</button>
				{isModalOpen && (
					<ConfirmModal
						handleConfirm={handleConfirm}
						setIsOpen={setIsModalOpen}
					/>
				)}
			</header>
		);
	}

	return (
		<header className='w-full border-b border-b-dark/20 p-6 flex items-center justify-between'>
			<Link href={'/'}>
				<Logo className='w-14 h-14 text-primaryLight' />
			</Link>
			<div className='flex items-center gap-6'>
				<Link href={'/user/favorites'}>
					<div className='flex items-center gap-2 group'>
						<p
							className={`${
								selectedPage === 'favorites' ? 'text-sec' : 'text-dark'
							} text-xl group-hover:text-primaryLight`}
						>
							Favoritos
						</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`${
								selectedPage === 'favorites' ? 'text-sec' : 'text-dark'
							} w-8 h-8 group-hover:text-primaryLight`}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
							/>
						</svg>
					</div>
				</Link>
				<Link href={'/user/purchases'}>
					<div className='flex items-center gap-2 group'>
						<p
							className={`${
								selectedPage === 'purchases' ? 'text-sec' : 'text-dark'
							} text-xl group-hover:text-primaryLight`}
						>
							Compras
						</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`${
								selectedPage === 'purchases' ? 'text-sec' : 'text-dark'
							} w-8 h-8 group-hover:text-primaryLight`}
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
					href={'/user'}
					className='flex gap-2 items-center group'
				>
					<h6
						className={`${
							selectedPage === 'user' ? 'text-sec' : 'text-dark'
						} text-xl group-hover:text-primaryLight`}
					>
						Usuário
					</h6>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${
							selectedPage === 'user' ? 'text-sec' : 'text-dark'
						} w-10 h-10 group-hover:text-primaryLight`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
						/>
					</svg>
				</Link>
				<button
					onClick={handleClick}
					className='flex items-center gap-2 text-dark hover:text-red-600'
				>
					<h3 className='text-xl'>Sair</h3>
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
							d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
						/>
					</svg>
				</button>
			</div>
			{isModalOpen && (
				<ConfirmModal
					handleConfirm={handleConfirm}
					setIsOpen={setIsModalOpen}
				/>
			)}
		</header>
	);
};
