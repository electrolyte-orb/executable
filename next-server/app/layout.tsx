import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
	src: [
		{
			path: '../node_modules/inter-ui/Inter (web latin)/Inter.var.woff2',
		},
		{
			path: '../node_modules/inter-ui/Inter (web latin)/Inter-italic.var.woff2',
			style: 'italic',
		},
	],
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
				className={
					myFont.className + ' bg-black text-neutral-400 leading-tight'
				}
			>
				{children}
			</body>
		</html>
	);
}
