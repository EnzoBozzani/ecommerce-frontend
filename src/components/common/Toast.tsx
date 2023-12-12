import { FC, Dispatch, SetStateAction } from 'react';

interface Props {
	text: string;
	type: 'success' | 'error' | 'normal';
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Toast: FC<Props> = ({ text, type, setIsOpen }) => {
	return (
		<div
			className={`w-64 md:w-72 flex justify-between items-center rounded p-4 ${
				type === 'success' ? 'bg-green' : type === 'error' ? 'bg-red-500' : 'bg-neutral-500'
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
				className='w-6 h-6 hover:cursor-pointer'
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
