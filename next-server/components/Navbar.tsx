import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function Navbar() {
	return (
		<nav className="px-6 py-2 sticky top-0 z-20 flex items-center backdrop-blur-sm bg-black/20 border-b border-neutral-800">
			<Image alt="Logo" src={Logo} width={64} height={64} className="mr-1" />

			<Link
				href="/"
				className="text-2xl inline-flex items-center font-medium leading-tight tracking-tighter text-white"
			>
				Executable
				<span className="ml-2 text-sm leading-3 font-bold inline-grid place-items-center h-6 w-6 border-2 border-white rounded-lg">
					7
				</span>
			</Link>
		</nav>
	);
}
