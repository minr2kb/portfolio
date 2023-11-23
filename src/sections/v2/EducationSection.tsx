import ExperienceItem, { type ExperienceItemType } from '@components/ExperienceItem';
import ParallaxItem, { type ParallaxItemProps } from '@components/ParallaxItem';
import { Box, Divider, Typography } from '@mui/material';

const academic: ExperienceItemType = {
  title: 'Stony Brook University',
  subtitle: '2019 Spring - 2022 Fall',
  logoSrc: '/images/SBU-logo-simp.png',
  descs: [
    'Bachelor of Science',
    '전공: Applied Mathematics and Statistics (응용 수학 통계학)',
    '부전공: Computer Science (컴퓨터 공학)',
    'CGPA: 3.98/4.0',
  ],
};

const parallaxIcons: ParallaxItemProps[] = [
  {
    speed: 30,
    position: {
      top: '40%',
      left: '-30%',
    },

    rotate: [0, 40],
    fontSize: 200,
    blur: 5,
    icon: '🎓',
  },
  {
    speed: 20,
    position: {
      top: '20%',
      right: '-10%',
    },
    rotate: [-60, -40],
    fontSize: 110,
    blur: 0,
    icon: '📚',
  },
  {
    speed: 10,
    position: {
      top: '-10%',
      left: '80%',
    },
    rotate: [0, 60],
    fontSize: 70,
    blur: 2,
    opacity: 0.9,
    icon: '🛹',
  },
];

function EducationSection({ open = false }: { open?: boolean }) {
  return (
    <Box position="relative">
      <Typography variant="h2">Education</Typography>
      <Divider sx={{ mb: 2 }} />

      <ExperienceItem open={open} {...academic} />

      {parallaxIcons.map((parallaxIcon, idx) => (
        <ParallaxItem key={`parallax-aca-${idx}`} {...parallaxIcon} />
      ))}
    </Box>
  );
}

export default EducationSection;
