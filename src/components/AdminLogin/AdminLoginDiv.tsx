'use client';

import { FC, useState } from 'react';
import { InputGroup } from '..';
import { Button } from '..';

export const AdminLoginDiv: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleClick = () => {};

	return (
		<div className='w-[48rem] h-[32rem] bg-dark flex rounded-2xl'>
			<div className='bg-primary w-1/3 border-r border-r-light p-12'></div>
			<div className='w-2/3 flex flex-col justify-center items-center gap-16 p-12'>
				<InputGroup
					inputType='text'
					labelFor='email'
					labelText='Email'
					setValue={setEmail}
					value={email}
				/>
				<InputGroup
					inputType='password'
					labelFor='password'
					labelText='Senha'
					setValue={setPassword}
					value={password}
				/>
				<Button
					buttonText='Login'
					handleClick={handleClick}
				/>
			</div>
		</div>
	);
};
