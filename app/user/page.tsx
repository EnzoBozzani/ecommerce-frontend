'use client';

import { UserPagesHeader, Footer, UpdateUserDataForm, UpdateUserPasswordForm, Loader } from '@/src/components';
import { UsersService } from '@/src/services';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface UserData {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	birth: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
}

function UserData() {
	const router = useRouter();
	const [user, setUser] = useState<UserDecodedToken>();
	const [userData, setUserData] = useState<UserData>();
	const [selectedForm, setSelectedForm] = useState<'data' | 'password'>('data');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem('ecommerce-token');
			if (!token) return router.push('/login');
			const decoded = verifyToken(token);
			if (!decoded) return router.push('/login');
			const completeUser: UserData = await UsersService.getUserData();
			setUser(decoded);
			setUserData(completeUser);
			setIsLoading(false);
		};

		fetchUser();
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
				user={user}
				selectedPage='user'
			/>
			<section className='flex-1 flex flex-col'>
				<div className='mx-auto mt-12'>
					<button
						onClick={() => setSelectedForm('data')}
						className={`rounded-l hover:bg-opacity-90 text-light px-4 py-2 ${
							selectedForm === 'data' ? 'bg-primary' : 'bg-dark'
						}`}
					>
						Alterar Dados
					</button>
					<button
						onClick={() => setSelectedForm('password')}
						className={`rounded-r hover:bg-opacity-90 text-light px-4 py-2 ${
							selectedForm === 'password' ? 'bg-primary' : 'bg-dark'
						}`}
					>
						Alterar Senha
					</button>
				</div>
				{selectedForm === 'data' ? <UpdateUserDataForm user={userData} /> : <UpdateUserPasswordForm />}
			</section>
			<Footer
				selected='login'
				user={user}
			/>
		</main>
	);
}

export default UserData;
