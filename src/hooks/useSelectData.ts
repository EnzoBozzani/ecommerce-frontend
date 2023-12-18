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
	const [selected, setSelected] = useState<'Produtos' | 'Usuários' | 'Compras'>('Usuários');
	const [data, setData] = useState<Data>({ data: [], total: 0, headers: [''] });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			if (!sessionStorage.getItem('ecommerce-token')) {
				setIsLoading(false);
				return router.push('/admin/login');
			}
			setIsLoading(true);
			if (selected === 'Produtos') {
				const { products, total, message } = await AdminService.getAllProducts();
				if (message) throw new Error(message);
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
				setIsLoading(false);
				return;
			}
			if (selected === 'Usuários') {
				const { users, total, message } = await AdminService.getAllUsers();
				if (message) throw new Error(message);
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
				const { purchases, total, message } = await AdminService.getAllPurchases();
				if (message) throw new Error(message);
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