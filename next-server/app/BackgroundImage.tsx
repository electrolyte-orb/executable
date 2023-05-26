import Image from 'next/image';
import backgroundImage from '@/public/background.jpg';

export default function BackgroundImage({ blurred }: { blurred?: boolean }) {
	return (
		<div className="fixed overflow-hidden -z-10 top-0 left-0 w-full h-auto before:z-10 before:absolute before:bottom-0 before:left-0 before:w-screen before:h-28 before:inline-block before:bg-gradient-to-b before:from-transparent before:to-black select-none pointer-events-none">
			<Image
				alt="Background Image"
				src={backgroundImage}
				width={1920}
				height={2836}
				className={
					'aspect-[1920/2836] inline-block transition duration-300 ' +
					(blurred ? 'blur-sm contrast-125' : '')
				}
			></Image>
		</div>
	);
}
