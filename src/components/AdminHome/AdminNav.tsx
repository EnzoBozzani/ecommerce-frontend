import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { Logo } from '..';

interface Props {
	selected: 'Usuários' | 'Produtos' | 'Compras';
	setSelected: Dispatch<SetStateAction<'Usuários' | 'Produtos' | 'Compras'>>;
}

export const AdminNav: FC<Props> = ({ selected, setSelected }) => {
	return (
		<nav className='flex flex-col items-center gap-24 bg-dark min-h-screen p-24'>
			<div>
				<Logo className='h-24 w-24 text-primary' />
			</div>
			<div className='flex flex-col gap-12'>
				<div
					className={`${
						selected === 'Usuários' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => setSelected('Usuários')}
				>
					Usuários
				</div>
				<div
					className={`${
						selected === 'Produtos' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => setSelected('Produtos')}
				>
					Produtos
				</div>
				<div
					className={`${
						selected === 'Compras' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => setSelected('Compras')}
				>
					Compras
				</div>
			</div>
			<Link
				href='/admin/products/add'
				className='border-2 bg-green-600 border-green-900 rounded-lg text-light flex justify-center items-center py-2 px-8'
			>
				<span>Novo Produto</span>
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
						d='M12 4.5v15m7.5-7.5h-15'
					/>
				</svg>
			</Link>
		</nav>
	);
};
