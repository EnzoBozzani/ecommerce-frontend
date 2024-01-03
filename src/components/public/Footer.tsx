'use client';

import { useScreenWidth } from '@/src/hooks/useScreenWidth';
import { FC, useState } from 'react';
import Link from 'next/link';
import { UserDecodedToken } from '@/src/utils/verifyToken';
import Image from 'next/image';
import { UserData } from '@/app/user/page';

interface Props {
	user: UserDecodedToken | UserData | undefined;
	selected: 'home' | 'purchases' | 'favorites' | 'login';
}

const classes = {
	icon: 'w-8 h-8 text-dark',
	iconGroup: 'flex flex-col justify-center items-center gap-2',
};

export const Footer: FC<Props> = ({ user, selected }) => {
	const [copied, setCopied] = useState(false);
	const width = useScreenWidth();

	if (width >= 1024) {
		return (
			<footer className='w-full border-t border-t-dark/20 flex justify-center items-center gap-12 py-12'>
				<div className='flex items-center gap-2'>
					<Image
						alt='instagram logo'
						src='/instagram.svg'
						width={50}
						height={50}
					/>
					<p className='text-xl cursor-default'>Instagram</p>
					<a
						href='https://www.instagram.com'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-10 h-10 hover:text-primaryLight transition duration-300'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
							/>
						</svg>
					</a>
				</div>
				<div className='flex items-center gap-2'>
					<Image
						alt='wpp logo'
						src='/wpp.svg'
						width={50}
						height={50}
					/>
					<p className='text-xl cursor-default'>+XX (XX) XXXXX-XXXX</p>
					<button
						onClick={() => {
							setCopied(true);
							navigator.clipboard.writeText('+XX (XX) XXXXX-XXXX');
							setTimeout(() => setCopied(false), 1000);
						}}
					>
						{copied ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-10 h-10 text-green-500'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-10 h-10 hover:text-primaryLight transition duration-300'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z'
								/>
							</svg>
						)}
					</button>
				</div>
			</footer>
		);
	}

	return (
		<footer className='w-full border-t border-t-dark/20 py-4'>
			<nav className='w-full flex justify-evenly items-center'>
				<Link
					href='/'
					className={`${classes.iconGroup} ${selected === 'home' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${classes.icon} ${selected === 'home' && 'text-sec'}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
						/>
					</svg>

					<h3>Home</h3>
				</Link>
				<Link
					href={user ? '/user/purchases' : '/login'}
					className={`${classes.iconGroup} ${selected === 'purchases' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${classes.icon} ${selected === 'purchases' && 'text-sec'}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
						/>
					</svg>
					<h3>Compras</h3>
				</Link>
				<Link
					href={user ? '/user/favorites' : '/login'}
					className={`${classes.iconGroup} ${selected === 'favorites' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${classes.icon} ${selected === 'favorites' && 'text-sec'}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
						/>
					</svg>
					<h3>Favoritos</h3>
				</Link>
				<Link
					href={user ? '/user' : '/login'}
					className={`${classes.iconGroup} ${selected === 'login' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={`${classes.icon} ${selected === 'login' && 'text-sec'}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
						/>
					</svg>
					<h3>{user ? 'Usuário' : 'Entrar'}</h3>
				</Link>
			</nav>
		</footer>
	);
};
