'use client';

import { AdminNav, Table } from '@/src/components';
import { AdminService } from '@/src/services';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Data {
	data: any[];
	total: number;
	headers: string[];
}

export default function AdminHome() {
	const router = useRouter();
	const [selected, setSelected] = useState<'Produtos' | 'Usuários' | 'Compras'>('Usuários');
	const [data, setData] = useState<Data>({ data: [], total: 0, headers: [''] });
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			if (!sessionStorage.getItem('ecommerce-token')) {
				setIsLoading(false);
				return router.push('/admin/login');
			}
			setIsLoading(true);
			if (selected === 'Produtos') {
				const { products, total } = await AdminService.getAllProducts();
				setData({
					data: products,
					total,
					headers: [
						'ID',
						'Nome',
						'Descrição',
						'Preço',
						'Em Destaque',
						'Em Estoque',
						'N. de Favoritos',
						'Editar/Remover',
					],
				});
			}
			if (selected === 'Usuários') {
				const { users, total } = await AdminService.getAllUsers();
				const formattedUsers = users.map((user: any) => ({
					id: user.id,
					name: user.firstName + ' ' + user.lastName,
					phone: user.phone,
					email: user.email,
				}));
				setData({ data: formattedUsers, total, headers: ['ID', 'Nome', 'Telefone', 'Email'] });
			}
			if (selected === 'Compras') {
				const { purchases, total } = await AdminService.getAllPurchases();
				const formattedPurchases = purchases.map((purchase: any) => ({
					id: purchase.id,
					userId: purchase.userId,
					productId: purchase.productId,
					status: purchase.status,
					amount: purchase.amount,
					productName: purchase.Product.name,
					userEmail: purchase.User.email,
				}));
				setData({
					data: formattedPurchases,
					total,
					headers: [
						'ID',
						'ID do Usuário',
						'ID do Produto',
						'Status',
						'Pagamento',
						'Nome do Produto',
						'Email do Usuário',
					],
				});
			}
			setIsLoading(false);
		};

		fetchUsers();
	}, [selected]);

	if (isLoading) return <div></div>;

	return (
		<main className='bg-black w-full flex min-h-screen'>
			<AdminNav
				selected={selected}
				setSelected={setSelected}
			/>
			<section className='w-full min-h-screen flex flex-col items-center gap-12 pt-24'>
				<section className='flex flex-col justify-center items-center'>
					<h1 className='text-6xl text-sec font-bold'>Tabela de {selected}</h1>
					<h6 className='text-lg text-white/40'>(Total: {data.total})</h6>
				</section>
				<Table
					data={data.data}
					headers={data.headers}
					lastColumn={selected === 'Produtos'}
				/>
			</section>
		</main>
	);
}
