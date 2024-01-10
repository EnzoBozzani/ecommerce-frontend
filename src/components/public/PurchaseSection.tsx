import { Purchase } from '@/app/user/purchases/page';
import { FC } from 'react';
import { PurchaseCard } from '..';

interface Props {
	purchases: Purchase[] | undefined;
}

export const PurchaseSection: FC<Props> = ({ purchases }) => {
	return (
		<section className='w-full px-4 lg:w-[1000px] lg:mx-auto flex flex-col items-center gap-6 py-12'>
			<h1 className='text-5xl'>Compras</h1>
			{purchases?.map((purchase, i) => (
				<PurchaseCard
					key={i}
					purchase={purchase}
				/>
			))}
		</section>
	);
};
