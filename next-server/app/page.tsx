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
		<main className="p-8">
			<h1 className="text-2xl font-medium leading-tight tracking-tighter text-white text-center flex items-center justify-center">
				Executable
				<span className="ml-2 text-sm leading-3 font-bold inline-grid place-items-center h-6 w-6 border-2 border-white rounded-lg">
					7
				</span>
			</h1>

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
				<section>
					<h1 className="text-4xl mt-8 text-white font-bold tracking-tighter leading-normal">
						Have some{' '}
						<span className="z-0 relative px-1 inline-block shadow-xl shadow-orange-500/50 bg-gradient-to-tr from-orange-500 to-pink-600 rounded-lg leading-tight">
							<div className="absolute animate-subtleMotion -top-2 -right-4 h-8 w-8 border border-opacity-50 border-white backdrop-blur-md rounded-lg"></div>
							<div className="absolute animate-subtleMotion2 -bottom-2 -left-1 h-6 w-6 border border-opacity-50 border-white backdrop-blur-md rounded-md"></div>
							<div className="z-10 sticky animate-subtleMotion3">friends</div>
						</span>
						, and some{' '}
						<span className="px-1 inline-block shadow-xl shadow-purple-600/60 bg-gradient-to-t from-purple-600 to-transparent rounded-lg leading-tight">
							talk.
						</span>
					</h1>
					<InitDialog />
				</section>
			)}
		</main>
	);
}
