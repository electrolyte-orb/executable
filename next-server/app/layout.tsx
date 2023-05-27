// styles and fonts
import './globals.css';
import localFont from 'next/font/local';
// supabase
import supabaseClient from '@/utils/supabase-server';
// Providers
import SupabaseProvider from './supabase-provider';
import IconoirProvider from './iconoir-context';
// components
import { Navbar } from '@/components';

export const runtime = 'edge';

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

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = supabaseClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<html lang="en">
			<body
				className={
					myFont.className + ' bg-black text-neutral-400 leading-tight'
				}
			>
				<Navbar />
				<SupabaseProvider session={session}>
					<IconoirProvider
						iconProps={{
							width: '1.5rem',
							height: '1.5rem',
							style: { display: 'inline-block' },
						}}
					>
						{children}
					</IconoirProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
