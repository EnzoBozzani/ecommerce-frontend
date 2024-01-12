'use client';

import { Product } from '@/app/admin/[id]/page';
import { UserPagesHeader, Loader, Footer, ProductCard } from '@/src/components';
import FavoritesService from '@/src/services/FavoritesService';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function UserFavorites() {
	const router = useRouter();
	const [user, setUser] = useState<UserDecodedToken>();
	const [favoritedProducts, setFavoritedProducts] = useState<Product[]>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchFavoritedProducts = async () => {
			const token = localStorage.getItem('ecommerce-token');
			if (!token) return router.push('/login');
			const decoded = verifyToken(token);
			if (!decoded) return router.push('/login');
			setUser(decoded);
			const { products } = await FavoritesService.getUserFavorites();
			setFavoritedProducts(products);
			setIsLoading(false);
		};
		fetchFavoritedProducts();
	}, []);

	return (
		<main className='w-full min-h-screen bg-light flex flex-col'>
			<UserPagesHeader
				selectedPage='favorites'
				user={user}
			/>
			<section className='flex-1 px-6 flex flex-col items-center gap-6 lg:mx-auto lg:w-[1024px] pb-36 lg:pb-12 pt-12'>
				{isLoading ? (
					<Loader />
				) : favoritedProducts?.length === 0 ? (
					<article className='w-2/3 rounded-xl text-dark border border-dark/20 flex justify-center items-center h-[208px]'>
						<h3 className='italic text-2xl text-center'>Nenhum produto favoritado :(</h3>
					</article>
				) : (
					favoritedProducts?.map((product, i) => (
						<ProductCard
							product={product}
							key={i}
						/>
					))
				)}
			</section>
			<Footer
				selected='favorites'
				user={user}
			/>
		</main>
	);
}

export default UserFavorites;
