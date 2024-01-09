'use client';

import { useRouter } from 'next/navigation';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	const router = useRouter();
	return (
		<main className='w-full min-h-screen bg-dark flex flex-col gap-4 justify-center items-center'>
			<h2 className='text-6xl font-bold text-light'>Algo deu errado!</h2>
			<button
				className='text-light rounded border border-light bg-red-500 px-4 py-2'
				onClick={() => reset()}
			>
				Tente Novamente
			</button>
			<button
				className='text-light rounded border border-light bg-primary px-4 py-2'
				onClick={() => router.push('/')}
			>
				Home
			</button>
		</main>
	);
}

export default Error;
