import { FC, Dispatch, SetStateAction } from 'react';

interface Props {
	text: string;
	type: 'success' | 'error' | 'normal';
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Toast: FC<Props> = ({ text, type, setIsOpen, isOpen }) => {
	return (
		<div
			className={`${
				isOpen ? 'visible' : 'invisible'
			} w-64 md:w-72 flex justify-between items-center rounded px-4 py-2 ${
				type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-neutral-500'
			}`}
		>
			<p className='text-dark'>{text}</p>
			<svg
				onClick={() => setIsOpen(false)}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-8 h-8 hover:cursor-pointer'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M6 18L18 6M6 6l12 12'
				/>
			</svg>
		</div>
	);
};
