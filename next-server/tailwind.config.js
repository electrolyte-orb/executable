/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			sans: ['var(--sans-font)', 'system-ui'],
			secondary: ['var(--sec-font)', 'system-ui']
		},
		extend: {
			keyframes: {
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
				contentShowX: {
					from: {
						opacity: 0,
						transform: 'translateX(100%)',
					},
					to: {
						opacity: 1,
						transform: 'translateX(0%)',
					},
				},
			},
			animation: {
				overlayShow: 'overlayShow 200ms ease-out',
				contentShow: 'contentShow 200ms ease-out-expo forwards',
				contentShowX: 'contentShowX 2000ms ease-out-expo forwards',
				contentHide: 'contentHide 200ms ease-out forwards',
				fillWidth: 'fillWidth 4s ease-in-expo forwards',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')({ 
		strategy: 'class'
	})],
};
