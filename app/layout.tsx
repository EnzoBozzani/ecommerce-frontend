import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/src/styles/globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ecommerce - Home',
	description: 'Ecommerce platform with tech products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className='bg-light'
		>
			<body className={inter.className}>{children}</body>
			<Script src='https://jsuites.net/v4/jsuites.js' />
		</html>
	);
}
