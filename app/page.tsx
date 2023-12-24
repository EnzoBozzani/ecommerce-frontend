'use client';

import { HeroSection, ProductsSection } from '@/src/components/';
import { ProductsList } from '@/src/components/public/ProductsSection';
import { useState } from 'react';

export default function Home() {
	const [productsList, setProductsList] = useState<ProductsList>();
	const [isLoading, setIsLoading] = useState(true);
	const [title, setTitle] = useState('Em Destaque');

	return (
		<main className='w-full min-h-screen bg-dark'>
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
		</main>
	);
}
