import { FC, MouseEvent } from 'react';

interface Props {
	handleClick: any;
	buttonText: string;
}

export const Button: FC<Props> = ({ handleClick, buttonText }) => {
	return (
		<button
			className='rounded-full px-12 text-lg text-white/25 py-2 border-2 border-light hover:border-primary hover:text-light transition duration-200'
			onClick={handleClick}
		>
			{buttonText}
		</button>
	);
};
