import { Product } from '@/app/admin/[id]/page';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
	product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div className='flex w-full bg-black rounded-xl p-12 text-light'>
			<Image
				alt={`${product.name} image1`}
				src={`http://${product.images[0]}`}
				height={200}
				width={200}
				className='h-[250px] w-auto'
			/>
			<h3>{product.name}</h3>
		</div>
	);
};
