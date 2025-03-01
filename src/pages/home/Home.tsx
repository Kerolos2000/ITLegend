import React from 'react';

import { HomeHeader } from './HomeHeader';
import { HomeLayout } from './HomeLayout';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<HomeHeader />
			<HomeLayout />
		</>
	);
};
