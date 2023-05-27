'use client';
import { Main } from '../components';
import {
	ArrowRight,
	ChatBubble,
	Group,
	Heart,
	Internet,
	MouseScrollWheel,
	MoveRight,
	PeopleTag,
	Plus,
} from 'iconoir-react';
import BackgroundImage from './BackgroundImage';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
	const [blurredBackground, setBlurredBackground] = useState(false);
	const heroSectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const getStartedRef = useRef<HTMLDivElement>(null);
	const linkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		// scroll behaviour
		const heroSection = heroSectionRef.current!;
		const scrollIndicator = scrollRef.current!;

		const io = new IntersectionObserver(
			(entry) => {
				entry.forEach((observation) => {
					if (!observation.isIntersecting) {
						// hide Scroll Indicator
						scrollIndicator.style.visibility = 'hidden';

						setBlurredBackground(true);
					} else {
						setBlurredBackground(false);
						scrollIndicator.style.visibility = 'visible';
					}
				});
			},
			{ threshold: 1 }
		);
		if (heroSection && scrollIndicator) io.observe(heroSection);

		// video play
		const linkEl = linkRef.current!;
		const video = videoRef.current!;
		const button = getStartedRef.current!;

		const linkIO = new IntersectionObserver(
			(entry, observer) => {
				entry.forEach((observation) => {
					if (observation.isIntersecting) {
						video.play();
						button?.classList.add('animate-contentShowX');
						button.style.visibility = 'visible';
						observer.disconnect();
					}
				});
			},
			{ threshold: 1 }
		);

		if (linkEl && video && button) linkIO.observe(linkEl);

		// TODO: fadein animations

		// cleanup
		return () => {
			if (heroSection) io.disconnect();
		};
	}, [heroSectionRef, videoRef, scrollRef, getStartedRef, linkRef]);

	return (
		<>
			<Main>
				<section className="mt-10" ref={heroSectionRef}>
					<div className="flex items-center mt-4">
						<div className="text-xs tracking-wide w-max mr-2 min-w-max text-neutral-400">
							<ChatBubble className="inline-block h-4 w-auto" /> WEB Messaging
						</div>
						<div className="w-full h-[0.5px] bg-neutral-500"></div>
					</div>

					<h1 className="mt-2 text-5xl text-green-400 font-bold tracking-tighter">
						Have some <span className="text-green-200">friends</span>, and some{' '}
						<span className="text-green-200">talk.</span>
					</h1>
					<p className="mt-4 tracking-wide font-medium">
						Keep Scrolling to find more.
					</p>
				</section>
				<div className="h-[60vh]">
					<div
						ref={scrollRef}
						className="text-neutral-600 rounded-lg px-2 py-3 fixed bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-b from-neutral-900 to-transparent border border-neutral-800"
					>
						<MouseScrollWheel className="animate-bounce" />
					</div>
				</div>

				<section className="mt-8">
					<h2 className="font-bold text-white text-5xl tracking-tighter">
						It{"'"}s all about{' '}
						<span className="text-blue-500">connections.</span>
					</h2>
					<div className="flex mt-4 divide-solid divide-x-2 divide-neutral-800 box-border">
						<PeopleTag className="h-6 w-auto px-2 text-blue-500" />
						<Group className="h-6 w-auto px-2 text-green-500" />
						<Heart className="h-6 w-auto px-2 text-red-500" />
						<Internet className="h-6 w-auto px-2 text-white" />
					</div>
				</section>
				<section className="mt-16">
					<div className="leading-normal text-white font-medium italic uppercase text-center">
						Two possiblities exists:
						<br />
						Either we are alone, <br />
						Or we are not.
						<br />
						Both are equally terrifing
						<p className="text-neutral-600">Arthur C. Clarke</p>
					</div>
				</section>
				<section className="mt-16">
					<h2 className="font-bold tracking-tighter text-5xl text-white">
						Only One thing left to do
					</h2>
					<Link
						ref={linkRef}
						href="/account"
						className="flex mt-8 items-center max-w-full overflow-clip bg-black rounded-xl border border-neutral-800"
					>
						<video
							muted
							height="128px"
							width="128px"
							poster="/poster.png"
							ref={videoRef}
							className="pointer-events-none inline-block"
						>
							<source src="/out_400x400.webm" type="video/mp4" />
						</video>
						<div
							className="flex flex-col justify-between pr-4"
							style={{ visibility: 'hidden' }}
							ref={getStartedRef}
						>
							<div className="font-bold text-lg text-white">
								Get <span className="text-blue-500">Started</span>
								<br />
								Today <ArrowRight />
							</div>
							<p className="mt-2">Create or login to get in.</p>
						</div>
					</Link>
				</section>
				<BackgroundImage blurred={blurredBackground} />
			</Main>

			<footer className="mt-10 bg-neutral-900 text-neutral-700 border-t border-neutral-800 p-8">
				<p className="text-xl">Executable 7</p>
				<p className="mt-2">
					Proudly open sourced on{' '}
					<Link
						href="https://github.com/electrolyte-orb/executable/"
						className="text-blue-800"
					>
						Github@executable
					</Link>
				</p>
				<p className="mt-1">x-powered-by: Next.js</p>
				<p className="text-sm mt-1">© 2023 Vidhu Chaitanya</p>
			</footer>
		</>
	);
}
