import { Loader } from '@/src/components';

export default function Loading() {
	return (
		<main className='bg-dark w-full min-h-screen flex justify-center items-center'>
			<Loader />
		</main>
	);
}
