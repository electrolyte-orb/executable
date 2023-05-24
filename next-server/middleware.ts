import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Database } from '@/types/database.types';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
	try {
		await supabase.auth.getSession().catch(async () => {
			await supabase.auth.refreshSession();
		});
	} catch (err) {}
	return res;
}
