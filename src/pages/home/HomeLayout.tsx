import { Grid2, Typography } from '@mui/material';
import React from 'react';
import { Section } from 'src/components';

export interface HomeLayoutProps {}

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
	return (
		<Section id='home-layout'>
			<Grid2
				container
				spacing={2}
			>
				<Grid2
					size={{ md: 6, xs: 12 }}
					sx={{ order: { md: 1, xs: 1 } }}
				>
					<Typography variant='h5'>Section 2</Typography>
				</Grid2>

				<Grid2
					size={{ md: 6, xs: 12 }}
					sx={{ order: { md: 1, xs: 2 } }}
				>
					<Typography variant='h5'>Section 1</Typography>
				</Grid2>

				<Grid2
					size={{ md: 6, xs: 12 }}
					sx={{ order: { md: 2, xs: 3 } }}
				>
					<Typography variant='h5'>Section 3</Typography>
				</Grid2>
			</Grid2>
		</Section>
	);
};
