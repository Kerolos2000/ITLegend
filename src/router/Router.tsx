import { Routes } from '@/constant';
import { Layout } from '@/layout';
import { Home } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

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
