import './globals.css';
import localFont from 'next/font/local';
import SupabaseProvider from './supabase-provider';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import IconoirProvider from './iconoir-context';
import { Navbar } from './components';

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
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

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
							display: 'inline-block',
						}}
					>
						{children}
					</IconoirProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
