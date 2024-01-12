'use client';

import { BuyProductForm } from '@/src/components';
import { useRouter } from 'next/navigation';

function PurchaseProduct() {
	const router = useRouter();

	return (
		<main className='w-full min-h-screen bg-lightGray'>
			<div className='w-full p-4'>
				<button onClick={() => router.back()}>
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
							d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
						/>
					</svg>
				</button>
			</div>
			<BuyProductForm />
		</main>
	);
}

export default PurchaseProduct;
