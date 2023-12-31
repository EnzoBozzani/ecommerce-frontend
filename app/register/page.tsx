import { RegisterDiv } from '@/src/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ecommerce - Cadastro',
	description: 'Register to Ecommerce platform with tech products',
};

function RegisterPage() {
	return (
		<main className='w-full min-h-screen bg-black/5 py-12'>
			<RegisterDiv />
		</main>
	);
}

export default RegisterPage;
