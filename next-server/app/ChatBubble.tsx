export default function ChatBubble({
	sender,
	message,
}: {
	sender: string;
	message: string;
}) {
	const adminStyle =
		sender === 'Administrator' ? ' text-white px-1 rounded bg-pink-700' : '';
	return (
		<div>
			<div
				className={'text-sm text-pink-500 inline-block font-bold' + adminStyle}
			>
				{sender}
			</div>
			<div className="text-white">{message}</div>
		</div>
	);
}
