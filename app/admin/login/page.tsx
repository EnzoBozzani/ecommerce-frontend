import { AdminLoginDiv } from '@/src/components/';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ecommerce - Admin',
	description: 'Ecommerce Admin Login',
};

export default async function AdminLogin() {
	return (
		<main className='flex justify-center items-center w-full h-screen bg-black'>
			<AdminLoginDiv />
		</main>
	);
}
