import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	handleConfirm: Function;
	text: string;
	buttonText: string;
	buttonColor: string;
}

export const ConfirmModal: FC<Props> = ({ setIsOpen, handleConfirm, text, buttonText, buttonColor }) => {
	return (
		<section className='z-40 absolute inset-0 w-full min-h-screen flex justify-center items-center bg-black bg-opacity-50'>
			<div className='z-50 w-full mx-4 sm:w-[600px] h-[250px] bg-light rounded-xl border border-primaryLight'>
				<div className='w-full flex justify-end items-center p-4'>
					<button
						className='relative'
						onClick={() => setIsOpen(false)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-10 h-10'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18 18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<div className='w-full flex flex-col items-center justify-center gap-8'>
					<p className='text-justify text-2xl'>{text}</p>
					<div className='flex gap-4'>
						<button
							onClick={() => setIsOpen(false)}
							className='rounded border-2 border-dark/20 bg-transparent text-dark px-4 py-2'
						>
							Cancelar
						</button>
						<button
							onClick={() => handleConfirm()}
							className={`rounded border-2 border-dark/20 ${buttonColor} text-light px-4 py-2`}
						>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
