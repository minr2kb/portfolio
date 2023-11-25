import { Divider, Grid, Typography } from '@mui/material';
import EduExpItem from '~/components/ExperienceItem';
import { educations } from '~/data/sectionData';

function EducationSection({ open = false }: { open?: boolean }) {
  return (
    <Grid position="relative">
      <Typography variant="h2">Education</Typography>
      <Divider sx={{ mb: 2 }} />

      <EduExpItem open={open} {...educations} />
    </Grid>
  );
}

export default EducationSection;
