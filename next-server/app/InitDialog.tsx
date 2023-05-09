'use client';

export default function InitDialog() {
	return (
		<div>
			<input
				onChange={(e) => {
					console.log(e.target.value!);
				}}
				type="text"
				name="Username"
				placeholder="Username"
				className="outline-none px-4 py-2 bg-black border-2 border-pink-700 focus:ring-4 focus:ring-pink-900 transition rounded"
			/>
		</div>
	);
}
