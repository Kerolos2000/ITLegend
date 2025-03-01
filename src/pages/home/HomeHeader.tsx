import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { Section } from 'src/components';

export interface HomeHeaderProps {}

export const HomeHeader: React.FC<HomeHeaderProps> = () => {
	return (
		<Section
			id='home-header'
			sx={{ backgroundColor: 'background.paper' }}
		>
			<Breadcrumbs
				separator='›'
				sx={{ color: 'primary.main', mb: 1 }}
			>
				<Link
					color='textSecondary'
					href='#'
					underline='hover'
				>
					Home
				</Link>
				<Link
					color='textSecondary'
					href='#'
					underline='hover'
				>
					Courses
				</Link>
				<Typography color='text.primary'>Course Details</Typography>
			</Breadcrumbs>
			<Typography
				fontWeight='bold'
				variant='h4'
			>
				Starting SEO as your Home
			</Typography>
		</Section>
	);
};
