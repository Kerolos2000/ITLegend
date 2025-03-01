import { Box, BoxProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends BoxProps {
	id: string;
	subSection?: boolean;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, id, subSection, sx, ...rest } = props;

	return (
		<Box
			component='section'
			id={id}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				px: subSection ? 0 : { md: 4, xs: 2 },
				py: subSection ? 0 : 3,
				...sx,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
};
