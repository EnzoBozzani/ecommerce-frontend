import { Product } from '@/app/admin/[id]/page';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
	product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div>
			<Image
				alt={`${product.name} image1`}
				src={`http://${product.images[0]}`}
				height={100}
				width={100}
			/>
			<p>{product.name}</p>
		</div>
	);
};
