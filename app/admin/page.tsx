'use client';

import { Logo, Table } from '@/src/components';
import { AdminService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const classes = {
	navLink:
		'text-white/25 text-lg pb-2 border-b-2 border-b-primary hover:border-b-sec hover:text-light transition duration-200 cursor-pointer',
};

export default function AdminHome() {
	const router = useRouter();
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			if (!sessionStorage.getItem('ecommerce-token')) {
				setIsLoading(false);
				return router.push('/admin/login');
			}
			setIsLoading(true);
			const { products } = await AdminService.getAllProducts();
			setData(products);
			setIsLoading(false);
		};

		fetchUsers();
	}, []);

	if (isLoading) return <div></div>;

	return (
		<main className='bg-black w-full flex min-h-screen'>
			<div className='flex flex-col items-center gap-36 bg-dark min-h-screen p-12'>
				<div>
					<Logo className='h-24 w-24 text-primary' />
				</div>
				<div className='flex flex-col gap-8'>
					<div className={classes.navLink}>Usuários</div>
					<div className={classes.navLink}>Produtos</div>
					<div className={classes.navLink}>Compras</div>
				</div>
			</div>
			<div className='w-full flex justify-center items-center'>
				<Table
					data={data}
					headers={['ID', 'Nome', 'Descrição', 'Preço', 'Em Destaque', 'Em Estoque', 'N. de Favoritos']}
				/>
			</div>
		</main>
	);
}
