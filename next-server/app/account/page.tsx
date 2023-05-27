import LoggedIn from './LoggedIn';
import NewUser from './NewUser';
import supabaseClient from '@/utils/supabase-server';

export const runtime = 'edge';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export const metadata = {
	title: 'Account Management | Executable',
	description: 'Account Management page of Executable',
};

export default async function AccountLayout() {
	const supabase = supabaseClient();
	const {
		data: { session },
		error: userError,
	} = await supabase.auth.getSession();

	return session && userError === null ? (
		<LoggedIn session={session} />
	) : (
		<NewUser />
	);
}
