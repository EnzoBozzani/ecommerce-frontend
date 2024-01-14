'use client';

import { BuyProductForm, PaymentForm } from '@/src/components';
import { verifyToken } from '@/src/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function PurchaseProduct() {
	const router = useRouter();
	useEffect(() => {
		const token = localStorage.getItem('ecommerce-token');
		if (!token) return router.push('/login');
		const decoded = verifyToken(token);
		if (!decoded) return router.push('/login');
	}, []);

	return (
		<main className='w-full min-h-screen bg-lightGray pb-20'>
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
			<PaymentForm />
		</main>
	);
}

export default PurchaseProduct;
