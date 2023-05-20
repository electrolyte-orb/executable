import { pb } from '@/lib/pocketbase';
import ChatBubble from './ChatBubble';
import InitDialog from './InitDialog';

export const revalidate = 0;

export default async function Home() {
	const results = await pb.collection('chats').getFullList({
		sort: 'created',
	});
	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold leading-tight">Exec Services</h1>
			<InitDialog />
			<div>
				{results.map((result, index) => (
					<ChatBubble
						key={index}
						message={result.message}
						sender={result.sender}
					/>
				))}
			</div>
		</main>
	);
}
