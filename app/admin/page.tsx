'use client';

import { AdminNav, Table, Loader } from '@/src/components';
import { useSelectData } from '@/src/hooks/useSelectData';
import { NextPage } from 'next';

const AdminHome: NextPage = () => {
	const { data, isLoading, isNavOpen, selected, setIsNavOpen, setSelected } = useSelectData();

	if (isLoading) return <Loader />;

	return (
		<main className='bg-black w-full flex min-h-screen'>
			{isNavOpen && (
				<div
					className='fixed inset-0 bg-black opacity-50 z-40'
					onClick={() => setIsNavOpen(false)}
				></div>
			)}
			<AdminNav
				selected={selected}
				setSelected={setSelected}
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='fixed top-4 left-4 w-12 h-12 text-sec cursor-pointer z-10'
				onClick={() => setIsNavOpen(true)}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
				/>
			</svg>
			<section className='bg-gradient-to-b from-black to-dark fixed top-0 left-0 w-full min-h-screen flex flex-col items-center gap-12 pt-24'>
				<section className='flex flex-col justify-center items-center'>
					<h1 className='text-2xl md:text-6xl text-gradient font-bold'>Tabela de {selected}</h1>
					<h6 className='text-lg text-primaryLight'>(Total: {data.total})</h6>
				</section>
				<Table
					data={data.data}
					headers={data.headers}
					lastColumn={selected === 'Produtos'}
				/>
			</section>
		</main>
	);
};

export default AdminHome;
