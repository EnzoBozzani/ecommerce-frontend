import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ecommerce Platform',
	description: 'Ecommerce platform with tech products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className='bg-dark'
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
