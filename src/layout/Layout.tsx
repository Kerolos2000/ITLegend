import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
			<Outlet />
		</Box>
	);
};
