import { LoginDiv, Logo } from '@/src/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ecommerce - Login',
	description: 'Login to Ecommerce platform with tech products',
};

function LoginPage() {
	return (
		<main className='w-full min-h-screen bg-black/5 py-12'>
			<LoginDiv />
		</main>
	);
}

export default LoginPage;
