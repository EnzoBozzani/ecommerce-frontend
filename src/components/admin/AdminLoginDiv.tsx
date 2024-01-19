'use client';

import { FC, useEffect, useState } from 'react';
import { InputGroup, Toast } from '..';
import { Button } from '..';
import { AdminService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/src/utils/verifyToken';

export const AdminLoginDiv: FC = () => {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const token = localStorage.getItem('ecommerce-admin-token');
		if (token && verifyToken(token)) router.push('/admin');
	}, [router]);

	const handleClick = async () => {
		if (email === '' || password === '') {
			setErrorMessage('Preencha todos os campos!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 3 * 1000);
			return;
		}
		const res = await AdminService.login(email, password);
		if (res.message) {
			setErrorMessage(res.message);
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 3 * 1000);
		}

		if (res.authenticated) {
			localStorage.setItem('ecommerce-admin-token', res.token);
			router.push('/admin');
		}
	};

	return (
		<div className='bg-black w-11/12 md:w-[48rem] md:h-[32rem] flex flex-col gap-2 md:flex-row'>
			<div className='flex justify-center items-center bg-primary md:w-1/3 p-12'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-24 h-24 text-black'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
					/>
				</svg>
			</div>
			<div className='md:w-2/3 flex flex-col justify-center items-center gap-16 p-12 bg-dark'>
				<InputGroup
					inputType='text'
					labelFor='email'
					labelText='Email'
					setValue={setEmail}
					value={email}
					style='darkMode'
				/>
				<InputGroup
					inputType='password'
					labelFor='password'
					labelText='Senha'
					setValue={setPassword}
					value={password}
					style='darkMode'
				/>
				<div className='flex flex-col gap-4 w-2/3'>
					<Button
						buttonText='Login'
						handleClick={handleClick}
					/>
					<Toast
						isOpen={isErrorAlertOpen}
						setIsOpen={setIsErrorAlertOpen}
						text={errorMessage}
						type='error'
					/>
				</div>
			</div>
		</div>
	);
};
