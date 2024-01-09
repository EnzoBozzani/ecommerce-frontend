'use client';

import { Footer, Loader, PurchaseCard, UserPagesHeader } from '@/src/components';
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
			const res: Purchase[] = await UsersService.getUserPurchases();
			setPurchases(res);
			setIsLoading(false);
		};

		fetchPurchases();
	}, []);

	if (isLoading)
		return (
			<div className='w-full min-h-screen flex justify-center items-center bg-dark'>
				<Loader />
			</div>
		);

	return (
		<main className='w-full min-h-screen bg-light flex flex-col'>
			<UserPagesHeader
				selectedPage='purchases'
				user={user}
			/>
			<section className='max-w-screen-lg mx-auto flex flex-col items-center gap-6'>
				<h1 className='text-5xl'>Compras</h1>
				{isLoading ? (
					<Loader />
				) : (
					purchases?.map((purchase, i) => (
						<PurchaseCard
							key={i}
							purchase={purchase}
						/>
					))
				)}
			</section>
			<Footer
				selected='purchases'
				user={user}
			/>
		</main>
	);
}

export default UserPurchases;
