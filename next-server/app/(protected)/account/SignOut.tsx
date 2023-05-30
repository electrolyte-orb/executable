'use client';
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components';

export default function SignOut() {
	const { supabase } = useSupabase();
	const router = useRouter();

	async function handleSignOut() {
		await supabase.auth.signOut();
		router.refresh();
	}
	return (
		<Button
			onClick={() => {
				handleSignOut();
			}}
			variant="danger"
		>
			Sign Out
		</Button>
	);
}
