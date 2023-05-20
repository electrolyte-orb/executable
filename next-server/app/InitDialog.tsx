'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { AddUser, Cancel, MoveRight } from 'iconoir-react';

export default function InitDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="font-medium mt-4 px-12 py-1 bg-blue-600 text-white text-sm rounded-md leading-5">
					Login
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />

				<Dialog.Content className="transition-all data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bg-black border-2 border-neutral-800 rounded-xl p-6 w-[calc(100%-16px)] lg:w-1/3">
					<Dialog.Close asChild>
						<button className="group absolute top-4 right-4 text-red-500 bg-red-500 bg-opacity-20 rounded-lg">
							<Cancel />
						</button>
					</Dialog.Close>
					<Dialog.Title className="font-bold text-lg text-white">
						Login as
					</Dialog.Title>

					<Dialog.Description className="mt-4">
						Enter your details and continue to chatroom.
					</Dialog.Description>

					<input
						type="text"
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						spellCheck="false"
						placeholder="Enter your name"
						className="mt-4 py-2 px-4 rounded-md text-white placeholder:text-neutral-500 w-full border-2 border-neutral-700 transition focus:ring-4 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-600 bg-black outline-none"
					/>
					<button className="group transition hover:bg-blue-700 active:scale-95 w-full font-medium mt-4 px-12 py-3 bg-blue-600 text-white rounded-md leading-5 relative">
						<div className="select-none transition group-hover:-translate-y-full transform group-hover:opacity-0">
							Login
						</div>
						<div className="select-none transition group-hover:-translate-y-full group-hover:opacity-100 opacity-0 absolute left-1/2 -translate-x-1/2">
							Continue Now
						</div>
						<MoveRight className="opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition inline-block absolute right-8 top-1/2 -translate-y-1/2" />
						<AddUser className="group-hover:translate-x-full group-hover:opacity-0 transition inline-block absolute right-4 top-1/2 -translate-y-1/2" />
					</button>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
