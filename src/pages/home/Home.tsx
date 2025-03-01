import React from 'react';

import { HomeHeader } from './HomeHeader';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<HomeHeader />
		</>
	);
};
