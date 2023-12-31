import { LoginDiv, Logo } from '@/src/components';
import Link from 'next/link';

function LoginPage() {
	return (
		<main className='w-full min-h-screen bg-black/5'>
			<header className='w-full p-6 bg-light border-b border-b-dark/20'>
				<Link href={'/'}>
					<Logo className='w-12 h-12 text-primaryLight' />
				</Link>
			</header>
			<LoginDiv />
		</main>
	);
}

export default LoginPage;
