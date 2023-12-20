import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { Logo } from '..';

interface Props {
	selected: 'Usuários' | 'Produtos' | 'Compras';
	setSelected: Dispatch<SetStateAction<'Usuários' | 'Produtos' | 'Compras'>>;
	isNavOpen: boolean;
	setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export const AdminNav: FC<Props> = ({ selected, setSelected, isNavOpen, setIsNavOpen }) => {
	return (
		<nav
			className={`flex flex-col items-center gap-24 bg-dark min-h-screen p-6 transition-transform transform ease-in-out duration-500 ${
				isNavOpen ? 'translate-x-0' : '-translate-x-full'
			} z-50`}
		>
			<div className='w-full flex justify-end items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-10 h-10 text-sec cursor-pointer'
					onClick={() => setIsNavOpen(false)}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>
			<div>
				<Logo className='h-24 w-24 text-primary' />
			</div>
			<div className='flex flex-col gap-12'>
				<div
					className={`${
						selected === 'Usuários' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => {
						setTimeout(() => {
							setSelected('Usuários');
						}, 500);
						setIsNavOpen(false);
					}}
				>
					Usuários
				</div>
				<div
					className={`${
						selected === 'Produtos' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => {
						setTimeout(() => {
							setSelected('Produtos');
						}, 500);
						setIsNavOpen(false);
					}}
				>
					Produtos
				</div>
				<div
					className={`${
						selected === 'Compras' ? 'text-light border-b-sec' : 'text-white/25 border-b-primary'
					} text-lg pb-2 border-b-2 hover:border-b-sec hover:text-light transition duration-200 cursor-pointer`}
					onClick={() => {
						setTimeout(() => {
							setSelected('Compras');
						}, 500);
						setIsNavOpen(false);
					}}
				>
					Compras
				</div>
			</div>
			<Link
				href='/admin/add-product'
				className='border-2 bg-green-600 border-green-900 rounded-lg text-light flex justify-center items-center gap-2 py-2 px-8'
			>
				<span>Novo Produto</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-8 h-8'
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
