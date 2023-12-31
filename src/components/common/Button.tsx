import { FC, MouseEvent } from 'react';

interface Props {
	handleClick?: any;
	buttonText: string;
	submit?: boolean;
	style?: 'darkMode' | 'lightMode';
}

export const Button: FC<Props> = ({ handleClick, buttonText, submit, style }) => {
	return (
		<button
			className={`rounded-full ${
				!style || style === 'darkMode'
					? 'md:text-white/25 md:border-light md:hover:border-sec md:hover:text-light'
					: 'md:text-dark/25 md:border-dark/20 md:hover:border-primaryLight md:hover:text-primaryLight'
			} text-white bg-primary md:bg-transparent py-2 border-2 border-transparent transition duration-200`}
			onClick={handleClick || null}
			type={submit ? 'submit' : 'button'}
		>
			{buttonText}
		</button>
	);
};
