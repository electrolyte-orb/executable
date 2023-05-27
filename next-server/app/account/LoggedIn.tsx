import { Session } from '@supabase/supabase-js';
import SignOut from './SignOut';

export default function LoggedIn({ session }: { session: Session }) {
	return (
		<>
			<h1>hello {session.user.user_metadata.name}</h1>
			<SignOut />
		</>
	);
}
