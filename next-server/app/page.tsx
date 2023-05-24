import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import InitDialog from './InitDialog';
import { SignOut } from './components';
import type { Database } from '@/types/database.types';

export const revalidate = 0;
export const runtime = 'edge';

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
			<h1 className="text-2xl font-medium leading-tight tracking-tighter text-white text-center flex items-center justify-center">
				Executable
				<span className="ml-2 text-sm leading-3 font-bold inline-grid place-items-center h-6 w-6 border-2 border-white rounded-lg">
					7
				</span>
			</h1>
			{userData?.user_metadata.full_name && userError === null ? (
				<div className="mt-2 border-t border-neutral-700 py-4">
					<h3 className="text-lg text-white leading-tight tracking-tight">
						Welcome,{' '}
						<span className="text-blue-500">
							{userData.user_metadata.full_name}.
						</span>{' '}
						<span className="text-neutral-500">
							Today you look smart {' (⌐■_■) '}
						</span>
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
