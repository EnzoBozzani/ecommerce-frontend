import { AdminAddProductForm } from '@/src/components';
import Link from 'next/link';

export default function AdminAddProduct() {
	return (
		<main className='min-w-full min-h-full bg-gradient-to-b from-black to-dark py-24'>
			<Link href={'/admin'}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-8 h-8 sm:w-12 sm:h-12 fixed top-4 left-4 text-light'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
					/>
				</svg>
			</Link>
			<AdminAddProductForm />
		</main>
	);
}
