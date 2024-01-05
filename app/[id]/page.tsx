import Link from 'next/link';

function ProductPage() {
	return (
		<main className='w-full min-h-screen bg-light'>
			<header className='w-full bg-light border-b p-4 flex items-center justify-between'>
				<Link
					href='/'
					className='rounded-xl md:hover:bg-dark/5 px-4 py-2 flex items-center gap-2 text-xl bg-primary md:bg-transparent text-light md:text-dark'
				>
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
							d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
						/>
					</svg>
					<p>Buscar</p>
				</Link>
			</header>
			{/* ProductArea bg-black/5, recebe o id do produto e faz a requisição das informações */}
		</main>
	);
}

export default ProductPage;
