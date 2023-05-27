export default function Loader() {
	return (
		<div>
			<p className="text-lg font-bold text-white">Loading...</p>
			<div
				style={{
					position: 'fixed',
					zIndex: 100,
					height: 4,
					width: '100%',
					top: 0,
					left: 0,
					background: 'white',
					transformOrigin: 'left',
				}}
				className="animate-fullWidth"
			></div>
		</div>
	);
}
