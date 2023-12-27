'use client';

import { FC, FormEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Header, HeroSectionCarousel } from '..';
import { UserDecodedToken, verifyToken } from '@/src/utils/verifyToken';
import { ProductsList } from './ProductsSection';
import { ProductsService } from '@/src/services';

interface Props {
	setProductsList: Dispatch<SetStateAction<ProductsList | undefined>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setTitle: Dispatch<SetStateAction<string>>;
}

export const HeroSection: FC<Props> = ({ setProductsList, setIsLoading, setTitle }) => {
	const [user, setUser] = useState<UserDecodedToken>();
	const [name, setName] = useState('');
	const [param, setParam] = useState<'num_favorites' | 'price'>('price');
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
	const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

	useEffect(() => {
		const token = sessionStorage.getItem('ecommerce-token');
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

	const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		setIsLoading(true);
		if (name === '') return setIsLoading(false);
		setTitle(name.length > 10 ? `Com "${name.slice(0, 10)}..."` : `Com "${name}"`);
		const res = await ProductsService.getProducts({ name, order, param });
		setName('');
		setProductsList(res);
		setIsLoading(false);
	};

	return (
		<section className='bg-light flex flex-col mx-auto max-w-[1600px]'>
			<Header
				handleSubmit={handleSubmit}
				name={name}
				setName={setName}
				isSearchDropdownOpen={isSearchDropdownOpen}
				setIsSearchDropdownOpen={setIsSearchDropdownOpen}
				order={order}
				setOrder={setOrder}
				param={param}
				setParam={setParam}
				user={user}
			/>
			<HeroSectionCarousel />
		</section>
	);
};
