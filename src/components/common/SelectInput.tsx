import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

export const SelectInput: FC<Props> = ({ value, setValue }) => {
	return (
		<div className='flex flex-col gap-6 w-[115px]'>
			<label
				className='text-light font-bold'
				htmlFor='featured'
			>
				Em destaque:
			</label>
			<select
				name='featured'
				id='featured'
				defaultValue={value}
				onChange={(ev) => setValue(ev.currentTarget.value)}
			>
				<option value='false'>Não</option>
				<option value='true'>Sim</option>
			</select>
		</div>
	);
};
