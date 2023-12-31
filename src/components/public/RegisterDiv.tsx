'use client';

import { FC, FormEvent, useState } from 'react';
import { InputGroup, Button, Toast, Logo } from '..';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthService } from '@/src/services';
import { isDateValid } from '@/src/utils/isDateValid';

export const RegisterDiv: FC = () => {
	const router = useRouter();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [birth, setBirth] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const formHaveEmptyFields =
			firstName === '' || lastName === '' || birth === '' || phone === '' || email === '' || password === '';

		if (formHaveEmptyFields) {
			setErrorMessage('Preencha todos os campos!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 2 * 1000);
			return;
		}

		if (!isDateValid(birth)) {
			setErrorMessage('Data inválida ou menor que 18 anos!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 2 * 1000);
			return;
		}

		const birthFormatted = `${birth.slice(6, 10)}-${birth.slice(3, 5)}-${birth.slice(0, 2)}`;

		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('phone', phone);
		formData.append('birth', birthFormatted);
		formData.append('email', email);
		formData.append('password', password);

		const res = await AuthService.register(formData);
		setFirstName('');
		setLastName('');
		setBirth('');
		setPhone('');
		setEmail('');
		setPassword('');
		if (res.message) {
			setErrorMessage('Algo deu errado!');
			setIsErrorAlertOpen(true);
			setTimeout(() => {
				setIsErrorAlertOpen(false);
			}, 2 * 1000);
			return;
		}

		router.push('/login');
	};

	return (
		<section className='mx-auto w-[95%] sm:w-[600px] bg-light shadow-lg rounded-2xl flex flex-col gap-8 px-6 sm:px-24 py-12'>
			<div className='w-full flex justify-center items-center'>
				<Link href={'/'}>
					<Logo className='w-16 h-16 text-primaryLight' />
				</Link>
			</div>
			<h3 className='w-full text-center font-semibold text-2xl xs:text-4xl mb-4'>Criar conta</h3>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col w-full gap-8'
			>
				<div className='w-full'>
					<InputGroup
						inputType='text'
						labelFor='firstName'
						labelText='Nome:'
						setValue={setFirstName}
						value={firstName}
						style='lightMode'
					/>
				</div>
				<div className='w-full'>
					<InputGroup
						inputType='text'
						labelFor='lastName'
						labelText='Sobrenome:'
						setValue={setLastName}
						value={lastName}
						style='lightMode'
					/>
				</div>
				<div className='w-full'>
					<InputGroup
						inputType='text'
						labelFor='phone'
						labelText='Telefone:'
						setValue={setPhone}
						value={phone}
						style='lightMode'
						mask='phone'
					/>
				</div>
				<div className='w-full'>
					<InputGroup
						inputType='text'
						labelFor='birth'
						labelText='Data de Nascimento:'
						setValue={setBirth}
						value={birth}
						style='lightMode'
						mask='date'
					/>
				</div>
				<div className='w-full'>
					<InputGroup
						inputType='email'
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
				<div className='flex flex-col gap-4'>
					<Button
						buttonText='Cadastrar'
						style='lightMode'
						submit
					/>
					<Toast
						isOpen={isErrorAlertOpen}
						setIsOpen={setIsErrorAlertOpen}
						text={errorMessage}
						type='error'
					/>
					<p className='w-full text-center text-dark border-t border-t-dark/20 pt-4'>
						Já tem uma conta?{' '}
						<Link
							className='text-sec hover:underline hover:text-sec/80'
							href={'/login'}
						>
							Entrar
						</Link>
					</p>
				</div>
			</form>
		</section>
	);
};
