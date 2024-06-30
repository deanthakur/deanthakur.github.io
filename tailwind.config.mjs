/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primdark': '#281006',
				'secdark': '#432918',
				'primlight': '#f0eefa',
				'seclight': '#a88873',
			},
		},
	},
	plugins: [],
}
