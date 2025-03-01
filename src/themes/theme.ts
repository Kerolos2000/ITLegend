import '@fontsource-variable/inter';
import { ThemeOptions } from '@mui/material';

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#FFFFFF',
			paper: '#f5f9fa',
		},
		common: {
			black: '#1E293B',
			white: '#FFFFFF',
		},
		error: {
			contrastText: '#FFFFFF',
			main: '#EF4444',
		},
		info: {
			contrastText: '#FFFFFF',
			main: '#2563EB',
		},
		mode: 'light',
		primary: {
			contrastText: '#fff',
			dark: '#41b6b7',
			light: '#f2faf8',
			main: '#41b69d',
		},
		secondary: {
			contrastText: '#000000',
			dark: '#9CA3AF',
			light: '#E5E7EB',
			main: '#F3F4F6',
		},
		success: {
			contrastText: '#FFFFFF',
			main: '#22C55E',
		},
		text: {
			disabled: '#9CA3AF',
			primary: '#1E293B',
			secondary: '#6B7280',
		},
		warning: {
			contrastText: '#FFFFFF',
			main: '#FFA500',
		},
	},
	shape: {
		borderRadius: 10,
	},
	typography: {
		allVariants: {
			fontFamily: 'Inter Variable, Roboto, sans-serif',
		},
	},
};
