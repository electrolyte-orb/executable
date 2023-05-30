'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Loader() {
	const pathname = usePathname();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
		return () => {
			const delay = new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});

			delay.then((e) => {});
		};
	}, [pathname]);

	return (
		<div>
			<p className="text-lg font-bold text-white">Loading...</p>
			<div
				className={
					'fixed z-[100] h-1 top-0 left-0 bg-white origin-left ' +
					(loaded ? 'w-full bg-green-500' : 'animate-fullWidth')
				}
			></div>
		</div>
	);
}
