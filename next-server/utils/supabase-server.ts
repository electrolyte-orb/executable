import 'server-only';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = cache(() => {
	return createServerComponentClient({ cookies });
});

export const getUser = cache(async () => {
	return await supabase().auth.getSession();
});

export default supabase;
