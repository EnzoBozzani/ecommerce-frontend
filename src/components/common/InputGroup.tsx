import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
	inputType: 'text' | 'password';
	labelFor: string;
	labelText: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

export const InputGroup: FC<Props> = ({ inputType, labelFor, value, setValue, labelText }) => {
	return (
		<div className='flex flex-col gap-2'>
			<label
				className='text-light font-bold'
				htmlFor={labelFor}
			>
				{labelText}
			</label>
			<input
				className='px-4 py-2 border-b-2 border-b-primary bg-transparent focus:outline-none text-light'
				id={labelFor}
				name={labelFor}
				type={inputType}
				onChange={(ev) => setValue(ev.currentTarget.value)}
				value={value}
			/>
		</div>
	);
};
