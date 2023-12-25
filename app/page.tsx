'use client';

import { HeroSection, ProductsSection } from '@/src/components/';
import { ProductsList } from '@/src/components/public/ProductsSection';
import { useState } from 'react';

export default function Home() {
	const [productsList, setProductsList] = useState<ProductsList>();
	const [isLoading, setIsLoading] = useState(true);
	const [title, setTitle] = useState('Em Destaque');

	return (
		<main className='w-full min-h-screen bg-light'>
			<HeroSection
				setIsLoading={setIsLoading}
				setProductsList={setProductsList}
				setTitle={setTitle}
			/>
			<ProductsSection
				isLoading={isLoading}
				productsList={productsList}
				title={title}
			/>
			<footer className='w-full border-t border-t-dark/20 flex justify-center items-center py-12'>
				conteudo do footer
			</footer>
		</main>
	);
}
