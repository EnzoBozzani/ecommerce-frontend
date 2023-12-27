import { useScreenWidth } from '@/src/hooks/useScreenWidth';
import { FC } from 'react';
import Link from 'next/link';
import { UserDecodedToken } from '@/src/utils/verifyToken';

interface Props {
	user: UserDecodedToken | undefined;
	selected: 'home' | 'purchases' | 'favorites' | 'login';
}

const classes = {
	icon: 'w-8 h-8 text-dark',
	iconGroup: 'flex flex-col justify-center items-center gap-2',
};

export const Footer: FC<Props> = ({ user, selected }) => {
	const width = useScreenWidth();
	console.log(selected);

	if (width >= 1024) {
		return (
			<footer className='w-full border-t border-t-dark/20 flex justify-center items-center py-12'>
				conteudo do footer
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
						className={classes.icon}
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
					href={!user ? '/login' : '/user/purchases'}
					className={`${classes.iconGroup} ${selected === 'purchases' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={classes.icon}
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
						className={classes.icon}
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
					href={user ? '/' : '/login'}
					className={`${classes.iconGroup} ${selected === 'login' && 'text-sec'}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={classes.icon}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
						/>
					</svg>
					<h3>Entrar</h3>
				</Link>
			</nav>
		</footer>
	);
};
