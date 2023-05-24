'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
	Session,
	createBrowserSupabaseClient,
} from '@supabase/auth-helpers-nextjs';

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/database.types';
import { usePathname, useRouter } from 'next/navigation';

type MaybeSession = Session | null;

type SupabaseContext = {
	supabase: SupabaseClient<Database>;
	session: MaybeSession;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
	session,
}: {
	children: React.ReactNode;
	session: MaybeSession;
}) {
	const [supabase] = useState(() => createBrowserSupabaseClient());
	const [refreshing, setRefreshing] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((ev, clientSession) => {
			console.log({ ev, clientSession });
			if (
				ev === 'INITIAL_SESSION' &&
				// make sure the server and client token are mismatched, i.e. client need a refresh.
				clientSession?.access_token !== session?.access_token
			) {
				setRefreshing(true);
				router.replace('/');
				router.refresh();
			}
		});

		return () => {
			console.log('[event router shift]');
			subscription.unsubscribe();
			setRefreshing(false);
		};
	}, [supabase, router, session]);

	useEffect(() => {
		setRefreshing(false);
	}, [pathname]);

	return (
		<Context.Provider value={{ supabase, session }}>
			<>
				{refreshing && (
					<div className="fixed h-1 w-screen top-0 left-0 bg-gradient-to-r bg-blue-600 origin-left animate-fillWidth"></div>
				)}

				{children}
			</>
		</Context.Provider>
	);
}

export const useSupabase = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error('useSupabase must be used inside SupabaseProvider');
	}

	return context;
};
