import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const myFont = Plus_Jakarta_Sans({
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
				className={myFont.className + ' bg-black text-gray-300 leading-normal'}
			>
				{children}
			</body>
		</html>
	);
}
