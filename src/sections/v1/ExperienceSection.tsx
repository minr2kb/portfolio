import { Divider, Grid, Typography } from '@mui/material';
import EduExpItem from '~/components/ExperienceItem';
import { experiences } from '~/data/sectionData';

function ExperienceSection({ open = true }: { open?: boolean }) {
  return (
    <Grid position="relative">
      <Typography variant="h2">Experience</Typography>
      <Divider sx={{ mb: 2 }} />
      {experiences.map((experience, idx) => (
        <EduExpItem key={`experience-${idx}`} open={open} {...experience} />
      ))}
    </Grid>
  );
}

export default ExperienceSection;
