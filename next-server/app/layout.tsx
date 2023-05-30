// styles and fonts
import './globals.css';
// Providers
import IconoirProvider from './iconoir-context';
// components
import { Navbar } from '@/components';

export const runtime = 'edge';
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
	variable: '--sans-font',
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={myFont.variable}>
			<body className="bg-black text-neutral-400 leading-tight">
				<Navbar />
				<IconoirProvider
					iconProps={{
						width: '1.5rem',
						height: '1.5rem',
						style: { display: 'inline-block' },
					}}
				>
					{children}
				</IconoirProvider>
			</body>
		</html>
	);
}
