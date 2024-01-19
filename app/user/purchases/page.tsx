'use client';

import { Product } from '@/app/[id]/page';
import { Footer, Loader, PurchaseSection, UserPagesHeader } from '@/src/components';
import { UsersService } from '@/src/services';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface Purchase {
	id: number;
	userId: number;
	productId: number;
	status: 'shipped' | 'delivered';
	amount: number;
	addressComplement?: string;
	addressNumber: number;
	addressStreet: string;
	addressCity: string;
	addressState: string;
	addressCountry: string;
	addressPostalCode: string;
	Product: Product;
}

function UserPurchases() {
	const router = useRouter();
	const [user, setUser] = useState<UserDecodedToken>();
	const [purchases, setPurchases] = useState<Purchase[]>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPurchases = async () => {
			const token = localStorage.getItem('ecommerce-token');
			if (!token) return router.push('/login');
			const decoded = verifyToken(token);
			if (!decoded) return router.push('/login');
			setUser(decoded);
			const { purchases }: { purchases: Purchase[] } = await UsersService.getUserPurchases();
			setPurchases(purchases);
			setIsLoading(false);
		};

		fetchPurchases();
	}, [router]);

	return (
		<main className='w-full min-h-screen bg-light flex flex-col'>
			<UserPagesHeader
				selectedPage='purchases'
				user={user}
			/>
			{isLoading ? <Loader /> : <PurchaseSection purchases={purchases} />}
			<Footer
				selected='purchases'
				user={user}
			/>
		</main>
	);
}

export default UserPurchases;
