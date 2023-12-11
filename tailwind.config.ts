import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#1A1A1A',
				primary: '#531D82',
				primaryLight: '#7A2DBD',
				sec: '#2EEEB1',
				light: '#ECECEC',
			},
		},
	},
	plugins: [],
};
export default config;
