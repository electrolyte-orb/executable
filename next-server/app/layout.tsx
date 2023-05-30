// styles and fonts
import { myFont } from './styles';
// Providers
import IconoirProvider from './iconoir-context';
// components
import { Navbar } from '@/components';

export const runtime = 'edge';

export default async function RootLayout({
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
