/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
			  }
		},
	},
	
	plugins: [],
}
