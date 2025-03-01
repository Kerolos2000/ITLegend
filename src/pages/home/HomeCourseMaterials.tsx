import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import {
	Card,
	CardContent,
	Divider,
	Grid2,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { Section } from 'src/components';

const courseInfo = [
	{ icon: <AccessTimeIcon />, label: 'Duration:', value: '3 weeks' },
	{ icon: <MenuBookIcon />, label: 'Lessons:', value: '8' },
	{ icon: <PeopleIcon />, label: 'Enrolled:', value: '65 students' },
	{ icon: <LanguageIcon />, label: 'Language:', value: 'English' },
];

export interface HomeCourseMaterialsProps {}

export const HomeCourseMaterials: React.FC<HomeCourseMaterialsProps> = () => {
	return (
		<Section
			id='home-course-materials'
			subSection
		>
			<Typography
				sx={{ fontWeight: 'bold', mb: 2 }}
				variant='h5'
			>
				Course Materials
			</Typography>
			<Card
				sx={{
					backgroundColor: 'background.default',
					boxShadow: theme => theme.shadows[10],
				}}
			>
				<CardContent>
					<Grid2
						container
						spacing={{ md: 14, xs: 6 }}
					>
						{[1, 2].map((_, index) => (
							<Grid2
								key={index}
								size={{ md: 6, xs: 12 }}
							>
								{courseInfo.map((info, i) => (
									<>
										<Stack
											alignItems='center'
											direction='row'
											justifyContent='space-between'
										>
											<Stack
												alignItems='center'
												direction='row'
												spacing={1}
											>
												{info.icon}
												<Typography
													sx={{ fontWeight: 'medium' }}
													variant='body1'
												>
													{info.label}
												</Typography>
											</Stack>
											<Typography
												color='text.secondary'
												variant='body2'
											>
												{info.value}
											</Typography>
										</Stack>
										{i < courseInfo.length - 1 && (
											<Divider sx={{ my: 2 }} />
										)}{' '}
									</>
								))}
							</Grid2>
						))}
					</Grid2>
				</CardContent>
			</Card>
		</Section>
	);
};
