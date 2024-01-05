import Link from 'next/link';
import { ProductArea } from '@/src/components';

function ProductPage() {
	return (
		<main className='w-full min-h-screen bg-light'>
			<header className='w-full bg-light border-b p-2 md:p-4 flex items-center justify-between border-b border-b-dark/20'>
				<Link
					href='/'
					className='rounded-xl border-2 border-dark/20 bg-primary md:bg-transparent bg-primary md:bg-transparent md:hover:text-dark md:hover:border-primaryLight px-4 py-2 flex items-center gap-2 text-light md:text-dark/20'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 md:w-8 md:h-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
						/>
					</svg>
					<p className='text-lg md:text-xl'>Buscar</p>
				</Link>
				<Link
					href={'/user'}
					className='flex items-center gap-2 rounded-xl border-2 border-dark/20 bg-primary md:bg-transparent md:text-dark/20 text-light md:hover:text-dark md:hover:border-primaryLight py-2 px-4'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 md:w-8 md:h-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
						/>
					</svg>
					<p className='text-lg md:text-xl'>Usuário</p>
				</Link>
			</header>
			<ProductArea />
		</main>
	);
}

export default ProductPage;
