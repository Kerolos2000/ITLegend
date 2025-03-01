import {
	FacebookRounded,
	LinkedIn,
	PlayArrow,
	Twitter,
	YouTube,
} from '@mui/icons-material';
import { Box, IconButton, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Section } from 'src/components';

export interface HomeVideoSectionProps {}

const socialIcons: { icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> }[] =
	[
		{ icon: FacebookRounded },
		{ icon: Twitter },
		{ icon: LinkedIn },
		{ icon: YouTube },
	];

export const HomeVideoSection: React.FC<HomeVideoSectionProps> = () => {
	return (
		<Section
			id='home-video-section'
			subSection
		>
			<Box
				sx={{
					overflow: 'hidden',
					position: 'relative',
					width: '100%',
				}}
			>
				<Box
					alt='Video Thumbnail'
					component='img'
					src='https://placehold.co/600x400/FFFFFF/000000.png'
					sx={{
						borderRadius: 1,
						filter: 'brightness(0.7)',
						width: '100%',
					}}
				/>
				<IconButton
					sx={{
						'&:hover': { backgroundColor: 'grey.300' },
						backgroundColor: 'common.white',
						left: '50%',
						position: 'absolute',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<PlayArrow sx={{ color: 'primary.main' }} />
				</IconButton>
			</Box>
			<Box sx={{ display: 'flex', gap: 2 }}>
				{socialIcons.map(({ icon: Icon }, index) => (
					<IconButton
						key={index}
						sx={{
							border: theme => `1px solid ${theme.palette.secondary.light}`,
							color: 'secondary.main',
						}}
					>
						<Icon sx={{ fontSize: 20 }} />
					</IconButton>
				))}
			</Box>
		</Section>
	);
};
