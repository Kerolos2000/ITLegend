import { Box, BoxProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends BoxProps {
	id: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, id, sx, ...rest } = props;

	return (
		<Box
			component='section'
			id={id}
			sx={{ px: { md: 4, xs: 2 }, py: 3, ...sx }}
			{...rest}
		>
			{children}
		</Box>
	);
};
