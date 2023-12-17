'use client';

import { useRouter } from 'next/navigation';

function NotFound() {
	const router = useRouter();

	return (
		<main className='w-full min-h-screen bg-dark flex flex-col gap-4 justify-center items-center'>
			<h2 className='text-2xl md:text-6xl font-bold text-light'>Página não encontrada!</h2>
			<button
				className='text-light rounded border border-light bg-gradient-to-r from-primary to-sec px-4 py-2'
				onClick={() => router.push('/')}
			>
				Página Principal
			</button>
		</main>
	);
}

export default NotFound;
