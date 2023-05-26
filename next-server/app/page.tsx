'use client';
import { Main } from './components';
import { ChatBubble } from 'iconoir-react';
import BackgroundImage from './BackgroundImage';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
	const [blurredBackground, setBlurredBackground] = useState(false);
	const heroSectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// scroll behaviour
		const heroSection = heroSectionRef.current!;

		const io = new IntersectionObserver(
			(entry) => {
				entry.forEach((observation) => {
					if (!observation.isIntersecting) {
						setBlurredBackground(true);
					} else {
						setBlurredBackground(false);
					}
				});
			},
			{ threshold: 1 }
		);
		io.observe(heroSection);
		// video play
		const videoIO = new IntersectionObserver(
			(entry) => {
				entry.forEach((observation) => {
					if (observation.isIntersecting) {
						videoRef.current?.play();
					}
				});
			},
			{ threshold: 1 }
		);
		videoIO.observe(videoRef.current!);

		// cleanup
		return () => {
			io.disconnect();
			videoIO.disconnect();
		};
	}, []);

	return (
		<Main>
			<section className="mt-10" ref={heroSectionRef}>
				<div className="flex items-center mt-4">
					<div className="text-xs tracking-wide w-max mr-2 min-w-max text-neutral-400">
						<ChatBubble className="inline-block h-4 w-auto" /> WEB Messaging
					</div>
					<div className="w-full h-[0.5px] bg-neutral-500"></div>
				</div>

				<h1 className="mt-2 text-4xl text-green-400 font-bold tracking-tighter">
					Have some <span className="text-green-200">friends</span>, and some{' '}
					<span className="text-green-200">talk.</span>
				</h1>
				<p className="mt-4 tracking-wide font-medium">
					Keep Scrolling to find more.
				</p>
			</section>

			<div className="mt-80 mb-2 flex flex-col items-center">
				<h2 className="font-black text-white text-5xl">
					It{"'"}s all about <span className="text-blue-500">connections.</span>
				</h2>
				<video
					muted
					height="200px"
					width="200px"
					poster="/logo.png"
					ref={videoRef}
					className="inline-block bg-black rounded-2xl border border-neutral-700 mt-4"
				>
					<source src="/out.mp4" type="video/mp4" />
				</video>
			</div>

			<BackgroundImage blurred={blurredBackground} />
		</Main>
	);
}
