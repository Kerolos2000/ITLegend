import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { lightTheme } from './themes';

export interface AppProps {}
export const App: React.FC<AppProps> = () => {
	const theme = createTheme(lightTheme);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
