'use client';

import { FC, useState } from 'react';
import { InputGroup, Button, Toast } from '..';
import { useRouter } from 'next/navigation';

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
			}, 3 * 1000);
			return;
		}
		//trocar pro UsersService
		// const res = await AdminService.login(email, password);
		// if (res.message) {
		// 	setErrorMessage(res.message);
		// 	setIsErrorAlertOpen(true);
		// 	setTimeout(() => {
		// 		setIsErrorAlertOpen(false);
		// 	}, 3 * 1000);
		// }

		// if (res.authenticated) {
		// 	localStorage.setItem('ecommerce-admin-token', res.token);
		// 	router.push('/admin');
		// }
	};

	return (
		<section className='mt-24 mx-auto w-[95%] sm:w-[600px] bg-light shadow-lg rounded-2xl flex flex-col gap-12 px-6 sm:px-24 py-12'>
			<h3 className='w-full text-center font-semibold text-2xl xs:text-4xl mb-4'>Acessar conta</h3>
			<div className='w-full'>
				<InputGroup
					inputType='text'
					labelFor='email'
					labelText='E-mail:'
					setValue={setEmail}
					value={email}
					style='lightMode'
				/>
			</div>
			<div className='w-full'>
				<InputGroup
					inputType='password'
					labelFor='password'
					labelText='Senha:'
					setValue={setPassword}
					value={password}
					style='lightMode'
				/>
			</div>
			<div className='w-full flex flex-col gap-4'>
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
			</div>
		</section>
	);
};
