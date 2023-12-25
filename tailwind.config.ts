import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				dark: '#262626',
				primary: '#5C307F',
				primaryLight: '#7A2DBD',
				sec: '#FF8100',
				light: '#EBEBEB',
				lightGray: '#0000001a',
				black: '#000',
			},
		},
	},
	plugins: [],
};
export default config;
