'use client';

import { FC, FormEvent, useState } from 'react';
import { InputGroup, Button, ConfirmModal } from '..';

export const UpdateUserPasswordForm: FC = () => {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		setIsModalOpen(true);
	};

	const handleConfirmSubmit = async () => {
		//...
		setIsModalOpen(false);
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
		</form>
	);
};
