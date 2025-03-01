import { Grid2, Typography } from '@mui/material';
import React from 'react';
import { Section } from 'src/components';

import { HomeCourseMaterials } from './HomeCourseMaterials';
import { HomeVideoSection } from './HomeVideoSection';

export interface HomeLayoutProps {}

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
	return (
		<Section id='home-layout'>
			<Grid2
				container
				spacing={2}
			>
				<Grid2
					size={{ md: 8, xs: 12 }}
					sx={{ order: { md: 1, xs: 1 } }}
				>
					<HomeVideoSection />
				</Grid2>

				<Grid2
					size={{ md: 4, xs: 12 }}
					sx={{ order: { md: 1, xs: 2 } }}
				>
					<Typography variant='h5'>Section 1</Typography>
				</Grid2>

				<Grid2
					size={{ md: 8, xs: 12 }}
					sx={{ order: { md: 2, xs: 3 } }}
				>
					<HomeCourseMaterials />
				</Grid2>
			</Grid2>
		</Section>
	);
};
