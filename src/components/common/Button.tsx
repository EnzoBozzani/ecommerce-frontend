import { FC, MouseEvent } from 'react';

interface Props {
	handleClick: any;
	buttonText: string;
}

export const Button: FC<Props> = ({ handleClick, buttonText }) => {
	return (
		<button
			className='rounded-full px-12 text-sec border-sec text-white bg-primary md:bg-transparent md:text-white/25 py-2 border-2 md:border-light md:hover:border-sec md:hover:text-light transition duration-200'
			onClick={handleClick}
		>
			{buttonText}
		</button>
	);
};
