import { Purchase } from '@/app/user/purchases/page';
import { FC } from 'react';

interface Props {
	purchase: Purchase;
}

export const PurchaseCard: FC<Props> = ({ purchase }) => {
	return <article className='w-full'></article>;
};
