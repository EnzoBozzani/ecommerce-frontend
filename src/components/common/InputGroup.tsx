'use client';

import { Dispatch, FC, SetStateAction, useState } from 'react';

interface Props {
	inputType: 'text' | 'password' | 'textarea' | 'email';
	labelFor: string;
	labelText: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	style: 'darkMode' | 'lightMode';
	mask?: 'phone' | 'date';
}

export const InputGroup: FC<Props> = ({ inputType, labelFor, value, setValue, labelText, style, mask }) => {
	const [type, setType] = useState<'password' | 'text'>('password');

	const inputStyle =
		style === 'darkMode'
			? 'px-1 py-2 border-b-2 border-b-primary bg-transparent focus:outline-none text-light focus:border-b-sec'
			: 'w-full px-1 py-2 border-[1.75px] border-dark/20 rounded-lg bg-black/5 focus:outline-none focus:border-primaryLight';

	const labelStyle = style === 'darkMode' ? 'text-light font-bold' : 'text-dark font-semibold';

	const iconStyle =
		style === 'darkMode' ? 'w-8 h-8 text-light -ms-8 cursor-pointer' : 'w-8 h-8 text-dark/60 -ms-10 cursor-pointer';

	if (inputType === 'password') {
		return (
			<div className='flex flex-col gap-2'>
				<label
					className={labelStyle}
					htmlFor={labelFor}
				>
					{labelText}
				</label>
				<div className='flex items-center'>
					<input
						className={inputStyle}
						id={labelFor}
						name={labelFor}
						type={type}
						onChange={(ev) => setValue(ev.currentTarget.value)}
						value={value}
						minLength={5}
						maxLength={30}
					/>
					{type === 'password' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={iconStyle}
							onClick={() => setType('text')}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={iconStyle}
							onClick={() => setType('password')}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
							/>
						</svg>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-2'>
			<label
				className={labelStyle}
				htmlFor={labelFor}
			>
				{labelText}
			</label>
			{inputType === 'textarea' ? (
				<textarea
					name={labelFor}
					id={labelFor}
					cols={30}
					rows={10}
					minLength={1}
					maxLength={100}
					onChange={(ev) => setValue(ev.currentTarget.value)}
					value={value}
					className='resize-none px-1 py-2 border-2 border-primary bg-transparent text-light focus:outline-none focus:border-sec'
				/>
			) : (
				<input
					className={inputStyle}
					id={labelFor}
					name={labelFor}
					type={inputType}
					onChange={(ev) => setValue(ev.currentTarget.value)}
					value={value}
					minLength={1}
					maxLength={40}
					data-mask={mask === 'phone' ? '[-]+55 (00) 00000-0000' : mask === 'date' ? 'dd/mm/yyyy' : ''}
				/>
			)}
		</div>
	);
};
