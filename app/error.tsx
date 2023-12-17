'use client';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className='w-full min-h-screen bg-dark flex flex-col gap-4 justify-center items-center'>
			<h2 className='text-6xl font-bold text-light'>Algo deu errado!</h2>
			<button
				className='text-light rounded border border-light bg-red-500 px-4 py-2'
				onClick={() => reset()}
			>
				Tente Novamente
			</button>
		</main>
	);
}

export default Error;
