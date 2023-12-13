'use client';

import { useRouter } from 'next/navigation';

export default function AdminHome() {
	const router = useRouter();

	if (!sessionStorage.getItem('ecommerce-token')) router.push('/admin/login');

	return (
		<main className='bg-dark'>
			<div></div>
		</main>
	);
}
