'use client';

import { Table } from '@/src/components';
import { AdminService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminHome() {
	const router = useRouter();
	const [data, setData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	if (!sessionStorage.getItem('ecommerce-token')) router.push('/admin/login');

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			const { products, total } = await AdminService.getAllProducts();
			setData(products);
			setIsLoading(false);
		};

		fetchUsers();
	}, []);

	if (isLoading) return <div></div>;

	return (
		<main className='bg-black w-full flex h-screen'>
			<div className='flex flex-col items-center gap-72 bg-dark h-full p-12'>
				<div>Logo</div>
				<div>
					<div className='text-light text-lg'>Usuários</div>
					<div className='text-light text-lg'>Produtos</div>
					<div className='text-light text-lg'>Compras</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<Table
					data={data}
					headers={['osn', 'sioms', '3', '4', '5', '6', '7']}
				/>
			</div>
		</main>
	);
}
