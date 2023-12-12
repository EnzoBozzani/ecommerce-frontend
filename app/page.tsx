import { ProductsService } from '@/src/services/';

export default async function Home() {
	const { products, page, perPage, total, message } = await ProductsService.getFeaturedProducts();

	if (message) return <span>{message}</span>;

	return (
		<main className='flex w-100 justify-around flex-wrap mt-36 gap-12'>
			<div className='w-72 h-72 bg-primary'>{page}</div>
			<div className='w-72 h-72 bg-primaryLight'>{perPage}</div>
			<div className='w-72 h-72 bg-sec'>{total}</div>
			<div className='w-72 h-72 bg-light'>
				{products.map((product: any) => (
					<span key={product.id}>{product.name}</span>
				))}
			</div>
			<div className='w-72 h-72 bg-white/25'></div>
			<div className='text-white/25'></div>
		</main>
	);
}
