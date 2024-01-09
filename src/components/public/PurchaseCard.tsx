import { Purchase } from '@/app/user/purchases/page';
import { FC } from 'react';
import Image from 'next/image';
import { useScreenWidth } from '@/src/hooks/useScreenWidth';
import PaymentService from '@/src/services/PaymentService';

interface Props {
	purchase: Purchase;
}

export const PurchaseCard: FC<Props> = ({ purchase }) => {
	const address = `${purchase.addressStreet}, ${purchase.addressNumber} - ${purchase.addressCity}/${purchase.addressState}`;
	const width = useScreenWidth();

	const handleClick = async () => {
		const res = await PaymentService.setProductAsDelivered(+purchase.productId);
		if (res.ok) location.reload();
	};

	return (
		<article className='rounded-xl w-full flex gap-8 p-4 bg-lightGray hover:shadow-2xl border border-dark/20 hover:border-primaryLight'>
			<div className='flex justify-center items-center'>
				<Image
					alt={`${purchase.Product.name} image1`}
					src={`http://${purchase.Product.images[0]}`}
					height={200}
					width={200}
					className='rounded-xl max-h-[130px] max-w-[100px] xs:max-h-[208px] xs:max-w-[160px]'
				/>
			</div>
			<div className='flex flex-col w-full'>
				<span className='flex items-center h-1/2 text-base	 sm:text-xl'>
					{purchase.Product.name} -{' '}
					{(purchase.amount / 100).toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
						minimumFractionDigits: 2,
					})}
				</span>
				<span className='flex items-center gap-2 h-1/2'>
					{purchase.status === 'shipped' ? (
						<>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-10 h-10'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
								/>
							</svg>
							<p className='text-sm'>
								Enviado (p/ {width > 600 ? address : address.slice(0, 20) + '...'})
							</p>
							<button onClick={() => handleClick()}>Foi entregue?</button>
						</>
					) : (
						<>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-10 h-10 text-green-500'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
								/>
							</svg>
							<p>Entregue</p>
						</>
					)}
				</span>
			</div>
		</article>
	);
};
