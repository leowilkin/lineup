/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			'lineup': {
				'50': '#eff9ff',
				'100': '#e0f3fe',
				'200': '#bae8fd',
				'300': '#7dd6fc',
				'400': '#38c2f8',
				'500': '#0eaae9',
				'600': '#0289c7',
				'700': '#036da1',
				'800': '#075c85',
				'900': '#0c4c6e',
				'950': '#083149',
			},
			}
		  },
		
	},
	plugins: [],
}
