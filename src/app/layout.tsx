import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Skeleton Playground - Next.js',
	description: 'Skeleton Playground for Next.js'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="cerberus" className="dark">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
