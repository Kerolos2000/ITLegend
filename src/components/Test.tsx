import { Box, Typography } from '@mui/material';
import React from 'react';

export interface TestProps {}

export const Test: React.FC<TestProps> = () => {
	return (
		<Box>
			<Typography>Test</Typography>
		</Box>
	);
};
