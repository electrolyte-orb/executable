'use client';
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
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

				<Dialog.Content className="max-h-screen overflow-auto transition-all data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bg-neutral-900 border-2 border-neutral-800 rounded-xl p-6 w-[calc(100%-16px)] lg:w-1/3">
					<Dialog.Close asChild>
						<button className="absolute top-4 right-4 text-red-500 bg-red-500 bg-opacity-20 rounded-lg">
							<Cancel />
						</button>
					</Dialog.Close>
					<Dialog.Title className="font-bold text-lg text-white pb-6 border-b border-neutral-700">
						Login as
					</Dialog.Title>

					<Dialog.Description className="mt-4">
						Enter your details and continue to chatroom.
					</Dialog.Description>
					<Form.Root
						className="mt-4"
						onSubmit={(event) => event.preventDefault()}
					>
						<Form.Field name="name">
							<Form.Label className="text-sm text-white font-medium">
								Your name<span className="text-red-500">*</span>
							</Form.Label>
							<Form.Control asChild>
								<input
									type="text"
									autoComplete="off"
									autoCorrect="off"
									autoCapitalize="off"
									spellCheck="false"
									placeholder="your_name-_-_-1234"
									minLength={3}
									maxLength={30}
									pattern="^[a-zA-Z]{3}[^ ]*$"
									required
									className="mt-1 py-2 px-4 data-[invalid=true]:focus:ring-red-500 data-[invalid=true]:border-red-500 rounded-md text-white placeholder:text-neutral-500 w-full bg-neutral-800 leading-5 font-medium border border-neutral-600 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
								/>
							</Form.Control>
							<div className="empty:hidden mt-2 flex flex-col space-y-1">
								<Form.Message
									className="text-xs text-red-500 font-bold leading-3"
									match="tooShort"
								>
									<Cancel className="inline-block" /> Atleast 3 characters long
								</Form.Message>
								<Form.Message
									className="text-xs text-red-500 font-bold leading-3"
									match="patternMismatch"
								>
									<Cancel className="inline-block" /> First 3 characters must be
									alphabets with NO spaces througout
								</Form.Message>
								<Form.Message
									className="text-xs text-red-500 font-bold mt-1 leading-3"
									match="valueMissing"
								>
									Enter your NAME!
								</Form.Message>
							</div>
						</Form.Field>

						<Form.Submit asChild>
							<button className="group ease-[easeOutCirc] duration-100 transition hover:bg-blue-700 active:scale-95 w-full font-medium mt-4 px-12 py-3 bg-blue-600 text-white rounded-md leading-5 relative">
								Login
								<MoveRight className="opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition inline-block absolute right-8 top-1/2 -translate-y-1/2" />
								<AddUser className="group-hover:translate-x-full group-hover:opacity-0 transition inline-block absolute right-4 top-1/2 -translate-y-1/2" />
							</button>
						</Form.Submit>
					</Form.Root>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
