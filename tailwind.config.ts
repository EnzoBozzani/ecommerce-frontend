import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				dark: '#1A1A1A',
				primary: '#531D82',
				primaryLight: '#7A2DBD',
				sec: '#2EEEB1',
				light: '#EBEBEB',
				black: '#000',
			},
		},
	},
	plugins: [],
};
export default config;
