'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cancel } from 'iconoir-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { Button } from './components';
export default function InitDialog() {
	const [supabase] = useState(() => createBrowserSupabaseClient());
	const [authError, setAuthError] = useState<Error | null>(null);

	async function handleSubmit() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
		});
		if (error) setAuthError(error);
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="primary">Login</Button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />

				<Dialog.Content className="max-h-screen overflow-auto transition-all data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bg-neutral-900 border-2 border-neutral-800 rounded-xl p-6 w-[calc(100%-16px)] lg:w-1/3">
					<Dialog.Close asChild>
						<button className="absolute top-4 right-4 text-red-500 bg-red-500 bg-opacity-20 rounded-lg">
							<Cancel />
						</button>
					</Dialog.Close>
					<Dialog.Title className="font-bold text-lg text-white pb-6 border-b border-neutral-700">
						Login as
					</Dialog.Title>
					<button
						onClick={() => {
							handleSubmit();
						}}
						className="ease-[easeOutCirc] duration-100 text-sm border border-neutral-700 transition hover:bg-neutral-700 active:scale-95 w-full font-medium mt-4 px-12 py-3 bg-neutral-800 text-white rounded-md leading-5"
					>
						Login with Google
					</button>
					{authError && (
						<code className="text-xs leading-3 block text-neutral-500">
							{JSON.stringify(authError)}
						</code>
					)}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
