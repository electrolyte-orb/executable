/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				subtleMotion: {
					'0%': { transform: 'translate(-1px, 1px)' },
					'25%': { transform: 'translate(0px, 1px)' },
					'50%': { transform: 'translate(1px, -1px)' },
					'75%': { transform: 'translate(-1px, 2px)' },
					'100%': { transform: 'translate(1px, 1px)' },
				},
				subtleMotion2: {
					'0%': { transform: 'translate(10%, 10%)' },
					'25%': { transform: 'translate(-10%, -5%)' },
					'50%': { transform: 'translate(-10%, 0%)' },
					'75%': { transform: 'translate(5%, 10%)' },
					'100%': { transform: 'translate(-8, 8%)' },
				},
				subtleMotion3: {
					'0%': { transform: 'translate(1%, 1%)' },
					'25%': { transform: 'translate(-1%, -0.5%)' },
					'50%': { transform: 'translate(-1%, 0%)' },
					'75%': { transform: 'translate(0.5%, 1%)' },
					'100%': { transform: 'translate(-0.8, 0.8%)' },
				},
				fillWidth: {
					from: { transform: 'scaleX(0)' },
					to: { transform: 'scaleX(1)' },
				},
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				contentShow: {
					from: {
						opacity: 0,
						transform: 'translate(-50%, -40%) scale(0.9)',
					},
					to: {
						opacity: 1,
						transform: 'translate(-50%, -50%) scale(1)',
					},
				},
				contentHide: {
					from: {
						opacity: 1,
						transform: 'translate(-50%, -50%) scale(1)',
					},
					to: {
						opacity: 0,
						transform: 'translate(-50%, -40%) scale(0.9)',
					},
				},
			},
			animation: {
				overlayShow: 'overlayShow 200ms ease-out',
				contentShow: 'contentShow 200ms ease-out-expo forwards',
				contentHide: 'contentHide 200ms ease-out forwards',
				fillWidth: 'fillWidth 5s ease-in-out-expo forwards',
				subtleMotion: 'subtleMotion 6s ease-in-out-sine infinite alternate',
				subtleMotion2: 'subtleMotion2 6s ease-in-out-sine infinite alternate',
				subtleMotion3: 'subtleMotion3 6s ease-in-out-sine infinite alternate',
			},
		},
	},
	plugins: [],
};
