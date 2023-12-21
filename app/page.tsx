import { ProductsService } from '@/src/services/';
import { HeroSection } from '@/src/components/public/HeroSection';

export default async function Home() {
	const { products, page, perPage, total } = await ProductsService.getFeaturedProducts();

	return (
		<main className='w-full min-h-screen bg-dark pt-12'>
			<HeroSection />
		</main>
	);
}
