import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import InitDialog from './InitDialog';
import { SignOut, Main } from '@/app/components';
import type { Database } from '@/types/database.types';
export const revalidate = 0;
export const runtime = 'edge';
export const metadata = {
	title: 'Executable',
	description: 'Executable',
};

export default async function Page() {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});

	const {
		data: { user: userData },
		error: userError,
	} = await supabase.auth.getUser();

	return (
		<Main>
			{userData && userError === null ? (
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
		</Main>
	);
}
