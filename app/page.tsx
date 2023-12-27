'use client';

import { Footer, HeroSection, ProductsSection } from '@/src/components/';
import { ProductsList } from '@/src/components/public/ProductsSection';
import { ProductsService } from '@/src/services';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useEffect, useState } from 'react';

export default function Home() {
	const [user, setUser] = useState<UserDecodedToken>();
	const [productsList, setProductsList] = useState<ProductsList>();
	const [isLoading, setIsLoading] = useState(true);
	const [title, setTitle] = useState('Em Destaque');

	useEffect(() => {
		const token = localStorage.getItem('ecommerce-token');
		if (token) {
			verifyToken(token, setUser);
		}
		const fetchProducts = async () => {
			const res = await ProductsService.getFeaturedProducts();
			setProductsList(res);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);

	return (
		<main className='w-full min-h-screen bg-light'>
			<HeroSection
				setIsLoading={setIsLoading}
				setProductsList={setProductsList}
				setTitle={setTitle}
				user={user}
			/>
			<ProductsSection
				isLoading={isLoading}
				productsList={productsList}
				title={title}
			/>
			<Footer
				user={user}
				selected='home'
			/>
		</main>
	);
}
