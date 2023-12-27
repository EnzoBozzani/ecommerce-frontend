import { useRouter } from 'next/navigation';
import { AdminService } from '../services';
import { useState, useEffect } from 'react';

interface Data {
	data: any[];
	total: number;
	headers: string[];
}

export const useSelectData = () => {
	const router = useRouter();
	const [selected, setSelected] = useState<'Produtos' | 'Usuários' | 'Compras'>('Produtos');
	const [data, setData] = useState<Data>({ data: [], total: 0, headers: [''] });
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			if (!sessionStorage.getItem('ecommerce-admin-token')) {
				return router.push('/admin/login');
			}
			if (selected === 'Produtos') {
				const { products, total } = await AdminService.getAllProducts();
				setData({
					data: products,
					total,
					headers: ['ID', 'Nome', 'Preço', 'Em Destaque', 'Em Estoque', 'N. de Favoritos', 'Editar/Remover'],
				});
				setIsLoading(false);
				return;
			}
			if (selected === 'Usuários') {
				const { users, total } = await AdminService.getAllUsers();
				const formattedUsers = users.map((user: any) => ({
					id: user.id,
					name: `${user.firstName} ${user.lastName}`,
					phone: user.phone,
					email: user.email,
				}));
				setData({ data: formattedUsers, total, headers: ['ID', 'Nome', 'Telefone', 'Email'] });
				setIsLoading(false);
				return;
			}
			if (selected === 'Compras') {
				const { purchases, total } = await AdminService.getAllPurchases();
				const formattedPurchases = purchases.map((purchase: any) => ({
					id: purchase.id,
					userId: purchase.userId,
					productId: purchase.productId,
					status: purchase.status,
					amount: purchase.amount / 100,
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
				setIsLoading(false);
				return;
			}
		};

		fetchUsers();
	}, [selected]);

	return {
		selected,
		setSelected,
		data,
		isLoading,
		isNavOpen,
		setIsNavOpen,
	};
};
