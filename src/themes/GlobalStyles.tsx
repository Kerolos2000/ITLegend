import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();

	return (
		<MuiGlobalStyles
			styles={{
				'*::-webkit-scrollbar': {
					width: theme.spacing(1),
				},
				'*::-webkit-scrollbar-thumb': {
					':hover': {
						backgroundColor: theme.palette.primary.dark,
					},
					backgroundColor: theme.palette.primary.main,
				},
				'*::selection': {
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.common.white,
				},
				body: {
					overflowX: 'hidden',
				},
			}}
		/>
	);
};
