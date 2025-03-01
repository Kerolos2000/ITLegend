import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/enums';
import { Layout } from 'src/layout';
import { Home } from 'src/pages';

export const router = createBrowserRouter([
	{
		children: [
			{
				Component: Home,
				path: Routes.Home,
			},
		],
		Component: Layout,
	},
]);
