import { Call, Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';

function ContactSection() {
  const mobile = '010-4554-1664';
  const email = 'kbmin1129@gmail.com';
  const githubId = 'minr2kb';
  const instagramId = 'minr2_kb';
  const linkedIn = 'kyungbae-min-5963a921b';

  return (
    <Grid>
      <Typography variant="h2">Contacts</Typography>
      <Divider />
      <Grid
        sx={{
          my: 2,
          width: '100%',
        }}
      >
        <Grid
          container
          alignItems="center"
          mt={2}
          component="a"
          target="_blank"
          href={`tel:${mobile.replaceAll('-', '')}`}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Call />
          <Typography
            variant="body2"
            sx={{
              ml: 2,
            }}
          >
            {mobile}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          mt={2}
          component="a"
          target="_blanc"
          href={`mailto:${email}`}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Email />
          <Typography
            variant="body2"
            sx={{
              ml: 2,
            }}
          >
            {email}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          mt={2}
          component="a"
          target="_blanc"
          href={`https://github.com/${githubId}`}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <GitHub />
          <Typography
            variant="body2"
            sx={{
              ml: 2,
            }}
          >
            {githubId}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          mt={2}
          component="a"
          target="_blanc"
          href={`https://www.instagram.com/${instagramId}`}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Instagram />
          <Typography
            variant="body2"
            sx={{
              ml: 2,
            }}
          >
            @{instagramId}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          mt={2}
          component="a"
          target="_blanc"
          href={`https://www.linkedin.com/in/${linkedIn}`}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <LinkedIn />
          <Typography
            variant="body2"
            sx={{
              ml: 2,
            }}
          >
            {linkedIn}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactSection;
