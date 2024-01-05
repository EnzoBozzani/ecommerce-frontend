'use client';

import { FC, FormEvent, useState } from 'react';
import { InputGroup, Button, ConfirmModal, Toast } from '..';
import { UsersService } from '@/src/services';

export const UpdateUserPasswordForm: FC = () => {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isToastOpen, setIsToastOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
	const [toastType, setToastType] = useState<'success' | 'error'>('error');

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		setIsModalOpen(true);
	};

	const handleConfirmSubmit = async () => {
		setIsModalOpen(false);
		if (password === newPassword) {
			setToastType('error');
			setToastMessage('As senhas não podem ser iguais!');
			setIsToastOpen(true);
			setTimeout(() => setIsToastOpen(false), 2000);
			return;
		}

		const res = await UsersService.updatePassword(newPassword, password);

		if (res.message) {
			setToastType('error');
			setToastMessage(res.message);
			setIsToastOpen(true);
			setTimeout(() => setIsToastOpen(false), 2000);
			return;
		}

		setToastType('success');
		setToastMessage(res.message);
		setIsToastOpen(true);
		setTimeout(() => setIsToastOpen(false), 2000);
		setNewPassword('');
		setPassword('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center justify-center gap-8 my-12 px-6 sm:px-0 mx-auto w-full sm:w-[600px]'
		>
			<h1 className='text-3xl'>Alterar Senha</h1>
			<InputGroup
				inputType='password'
				labelText='Nova senha: '
				labelFor='newPassword'
				setValue={setNewPassword}
				style='lightMode'
				value={newPassword}
			/>
			<InputGroup
				inputType='password'
				labelText='Senha atual: '
				labelFor='password'
				setValue={setPassword}
				style='lightMode'
				value={password}
			/>
			<Button
				buttonText='Atualizar'
				submit
				style='lightMode'
			/>
			{isModalOpen && (
				<ConfirmModal
					buttonColor='bg-primaryLight'
					buttonText='Atualizar'
					setIsOpen={setIsModalOpen}
					handleConfirm={handleConfirmSubmit}
					text='Deseja mesmo atualizar?'
				/>
			)}
			<Toast
				isOpen={isToastOpen}
				setIsOpen={setIsToastOpen}
				text={toastMessage}
				type={toastType}
			/>
		</form>
	);
};
