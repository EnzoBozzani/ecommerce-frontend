import { HeroSection, ProductsSection } from '@/src/components/';

export default function Home() {
	return (
		<main className='w-full min-h-screen bg-dark pt-12'>
			<HeroSection />
			<ProductsSection />
		</main>
	);
}
