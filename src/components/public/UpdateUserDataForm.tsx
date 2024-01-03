'use client';

import { FC, FormEvent, useState } from 'react';
import { Button, InputGroup } from '..';
import { UserData } from '@/app/user/page';
import { UserDecodedToken } from '@/src/utils/verifyToken';

interface Props {
	user: UserData | undefined;
}

export const UpdateUserDataForm: FC<Props> = ({ user }) => {
	const [firstName, setFirstName] = useState(user!.firstName);
	const [lastName, setLastName] = useState(user!.lastName);
	const [phone, setPhone] = useState(user!.phone);
	const [email, setEmail] = useState(user!.email);

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		//...
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center justify-center gap-8 my-12 px-6 sm:px-0 mx-auto w-full sm:w-[600px]'
		>
			<h1 className='text-3xl'>Alterar Dados</h1>
			<InputGroup
				inputType='text'
				labelText='Nome: '
				labelFor='firstName'
				setValue={setFirstName}
				style='lightMode'
				value={firstName}
			/>
			<InputGroup
				inputType='text'
				labelText='Sobrenome: '
				labelFor='lastName'
				setValue={setLastName}
				style='lightMode'
				value={lastName}
			/>
			<InputGroup
				inputType='text'
				labelText='Telefone: '
				labelFor='phone'
				setValue={setPhone}
				style='lightMode'
				value={phone}
				mask='phone'
			/>
			<InputGroup
				inputType='email'
				labelText='E-mail: '
				labelFor='email'
				setValue={setEmail}
				style='lightMode'
				value={email}
			/>
			<Button
				buttonText='Atualizar'
				submit
				style='lightMode'
			/>
		</form>
	);
};
