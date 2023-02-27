/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	extend: {},
	plugins: [],
	screens: {
		'xs': {'max': '639px'},
		'sm': {'min': '640px', 'max': '767px'},
		'md': {'min': '768px', 'max': '1023px'},
		'lg': {'min': '1024px', 'max': '1279px'},
		'xl': {'min': '1280px', 'max': '1535px'},
		'2xl': {'min': '1536px'},
	},
}
