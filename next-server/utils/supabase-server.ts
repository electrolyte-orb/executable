import 'server-only';
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default function supabaseClient() {
	return createServerComponentSupabaseClient({ headers, cookies });
}
