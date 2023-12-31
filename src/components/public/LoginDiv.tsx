'use client';

import { FC, useState } from 'react';
import { InputGroup, Button, Toast, Logo } from '..';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthService } from '@/src/services';

export const LoginDiv: FC = () => {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

	const handleClick = async () => {
		if (email === '' || password === '') {
			setErrorMessage('Preencha todos os campos!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 2 * 1000);
			return;
		}
		const res = await AuthService.login(email, password);
		setEmail('');
		setPassword('');
		if (res.message) {
			setErrorMessage('Login e/ou senha incorretos!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 2 * 1000);
			return;
		}

		if (res.authenticated) {
			localStorage.setItem('ecommerce-token', res.token);
			router.push('/');
		}
	};

	return (
		<section className='mx-auto w-[95%] sm:w-[600px] bg-light shadow-lg rounded-2xl flex flex-col gap-8 px-6 sm:px-24 py-12'>
			<div className='w-full flex justify-center items-center'>
				<Link href={'/'}>
					<Logo className='w-16 h-16 text-primaryLight' />
				</Link>
			</div>
			<h3 className='w-full text-center font-semibold text-2xl xs:text-4xl mb-4'>Acessar conta</h3>
			<div className='w-full mb-6'>
				<InputGroup
					inputType='email'
					labelFor='email'
					labelText='E-mail:'
					setValue={setEmail}
					value={email}
					style='lightMode'
				/>
			</div>
			<div className='w-full mb-6'>
				<InputGroup
					inputType='password'
					labelFor='password'
					labelText='Senha:'
					setValue={setPassword}
					value={password}
					style='lightMode'
				/>
			</div>
			<div className='flex flex-col gap-4'>
				<Button
					buttonText='Entrar'
					style='lightMode'
					handleClick={handleClick}
				/>
				<Toast
					isOpen={isErrorAlertOpen}
					setIsOpen={setIsErrorAlertOpen}
					text={errorMessage}
					type='error'
				/>
				<p className='w-full text-center text-dark border-t border-t-dark/20 pt-4'>
					Não tem uma conta?{' '}
					<Link
						className='text-sec hover:underline hover:text-sec/80'
						href={'/register'}
					>
						Cadastre-se
					</Link>
					.
				</p>
			</div>
		</section>
	);
};
