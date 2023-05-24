import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import InitDialog from './InitDialog';
import { SignOut } from './components';
import type { Database } from '@/types/database.types';

export const revalidate = 0;
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const metadata = {
	title: 'Executable',
	description: 'Executable',
};

export default async function Home() {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});

	const {
		data: { user: userData },
		error: userError,
	} = await supabase.auth.getUser();

	const result = await supabase.from('chats').select('*');

	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold leading-tight text-white text-center">
				Exec Services
			</h1>
			{userData && userError === null ? (
				<div className="mt-2 border-t border-neutral-700 py-4">
					<h3 className="text-xl text-white leading-tight font-bold">
						Welcome, {userData.user_metadata.full_name}
					</h3>
					<SignOut />
				</div>
			) : (
				<InitDialog />
			)}
			<br />
		</main>
	);
}
