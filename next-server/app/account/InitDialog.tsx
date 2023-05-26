'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cancel, Google, NavArrowRight } from 'iconoir-react';
import { useSupabase } from '@/app/supabase-provider';
import { useState } from 'react';
import { Button } from '@/app/components';

export default function InitDialog() {
	const { supabase } = useSupabase();
	const [authError, setAuthError] = useState<Error | null>(null);

	async function handleSubmit() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: window.location.href,
			},
		});
		if (error) {
			setAuthError(error);
		}
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button className="group mt-4" size="large" variant="primary">
					Login
					<NavArrowRight className="ml-2 group-hover:translate-x-2 transition ease-[easeOutCubic]" />
				</Button>
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
					<Button
						onClick={() => {
							handleSubmit();
						}}
						variant="secondary"
						size="large-fw"
						className="mt-4"
					>
						<Google className="mr-2" />
						Login with Google
					</Button>
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
