import TextWithDot from '@components/TextWithDot';
import Trail from '@components/Trail';
import { Box, Typography } from '@mui/material';

export interface EduExpItemType {
  title: string;
  subtitle: string;
  logoSrc: string;
  descs: string[];
}

function EduExpItem(
  props: EduExpItemType & {
    open: boolean;
  },
) {
  const { open, title, subtitle, logoSrc, descs } = props;
  return (
    <Box
      sx={{
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={logoSrc}
          alt={title}
          style={{
            transition: 'all 0.3s ease-in-out',
            width: open ? '30px' : 0,

            marginRight: open ? '8px' : 0,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            flex: 1,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography color="text.secondary" variant="body1">
        {subtitle}
      </Typography>
      <Box mt={2}>
        <Trail open={open} spacing={16}>
          {descs.map((desc, idx) => (
            <TextWithDot key={`${title}-desc-${idx}`} variant="body1">
              {desc}
            </TextWithDot>
          ))}
        </Trail>
      </Box>
    </Box>
  );
}

export default EduExpItem;
