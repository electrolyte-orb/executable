import { getUser } from '@/utils/supabase-server';

export const metadata = {
	title: 'Account Management | Executable',
	description: 'Account Management page of Executable',
};

export default async function AccountPage() {
	const {
		data: { session: user },
	} = await getUser();

	return <div>hello {user?.user.user_metadata.full_name}</div>;
}
