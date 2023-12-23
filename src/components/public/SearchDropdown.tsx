'use client';

import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
	order: 'ASC' | 'DESC';
	param: 'price' | 'num_favorites';
	setOrder: Dispatch<SetStateAction<'ASC' | 'DESC'>>;
	setParam: Dispatch<SetStateAction<'price' | 'num_favorites'>>;
	setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export const SearchDropdown: FC<Props> = ({ order, param, setOrder, setParam, setIsDropdownOpen }) => {
	return (
		<div
			onMouseEnter={() => setIsDropdownOpen(true)}
			onMouseLeave={() => setIsDropdownOpen(false)}
			className='rounded-xl bg-dark text-light flex flex-col w-48 absolute z-50 right-0 md:right-auto md:ms-[28rem] mt-10'
		>
			<h2 className='w-full text-center text-light/50 py-1 cursor-default'>
				Ordenar por <br />({param === 'price' ? 'Preço' : 'Nº De Favoritos'}{' '}
				{order === 'ASC' ? 'Crescente' : 'Decrescente'}):
			</h2>
			<button
				className='w-full py-4 text-lg hover:bg-primary'
				onClick={() => setParam('price')}
			>
				Por Preço
			</button>
			<button
				className='w-full py-4 text-lg hover:bg-primary'
				onClick={() => setParam('num_favorites')}
			>
				Por Número de Favoritos
			</button>
			<button
				onClick={() => setOrder((current) => (current === 'ASC' ? 'DESC' : 'ASC'))}
				className='rounded-b-xl w-full py-4 text-lg flex justify-center items-center gap-2 hover:bg-primary'
			>
				{order === 'ASC' ? 'Crescente' : 'Decrescente'}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
					/>
				</svg>
			</button>
		</div>
	);
};
