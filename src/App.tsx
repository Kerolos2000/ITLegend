import { CssBaseline } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export interface AppProps {}
export const App: React.FC<AppProps> = () => {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	);
};
