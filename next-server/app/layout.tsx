import './globals.css';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
	title: 'Executable',
	description: 'Executable',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={rajdhani.className + ' bg-black text-gray-200 font-medium'}
			>
				{children}
			</body>
		</html>
	);
}
