'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cancel, Google, NavArrowRight } from 'iconoir-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { Button } from '@/components';

export default function InitDialog() {
	const supabase = createClientComponentClient();
	const [authError, setAuthError] = useState<Error | null>(null);

	async function handleSubmit() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
		if (error) {
			setAuthError(error);
		}
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button className="group mt-10 w-full" variant="primary">
					Login
					<NavArrowRight
						height={16}
						width={16}
						strokeWidth={2}
						className="ml-2"
					/>
				</Button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />

				<Dialog.Content className="max-h-screen overflow-auto transition-all data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bg-neutral-900 border-2 border-neutral-800 rounded-md p-6 w-[calc(100%-16px)] lg:w-1/3">
					<Dialog.Close asChild>
						<button className="absolute top-4 right-6 text-red-500 bg-red-500 bg-opacity-20 rounded">
							<Cancel />
						</button>
					</Dialog.Close>
					<Dialog.Title className="font-bold text-lg text-white">
						Login as
					</Dialog.Title>
					<p className="mt-2 text-white">Use Google OAuth Provider:</p>
					<Button
						onClick={() => {
							handleSubmit();
						}}
						size="large"
						className="mt-4 w-full bg-white text-black"
					>
						<Google className="mr-2" width={16} height={16} strokeWidth={2} />
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
