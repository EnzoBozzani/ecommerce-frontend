'use client';

import { UserPagesHeader, Footer } from '@/src/components';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function UserData() {
	const router = useRouter();
	const [user, setUser] = useState<UserDecodedToken>();

	useEffect(() => {
		const token = localStorage.getItem('ecommerce-token');
		if (!token) return router.push('/login');
		const decoded = verifyToken(token);
		if (!decoded) return router.push('/login');
		setUser(decoded);
	}, []);

	return (
		<main className='w-full min-h-screen bg-light'>
			<UserPagesHeader
				user={user}
				selectedPage='user'
			/>
			{/* criar componente para os forms de atualizar dados e atualizar senha */}
			<Footer
				selected='login'
				user={user}
			/>
		</main>
	);
}

export default UserData;
