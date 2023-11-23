import { Box, Zoom } from '@mui/material';

interface Props {
  size: number;
  fontSize: number;
  text: string;
}

function CircleText(props: Props) {
  const { size, fontSize, text } = props;
  return (
    <Box
      sx={{
        animation: 'rotate 20s linear infinite',
        '@keyframes rotate': {
          '100%': { transform: 'rotate(-360deg)' },
        },
      }}
    >
      <Zoom in>
        <svg viewBox="0 0 100 100" width={`${size}`} height={`${size}`}>
          <defs>
            <path
              id="circle"
              d="M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize={`${fontSize}`}>
            <textPath xlinkHref="#circle">
              {text}
              {/* TMR FOUNDERS 🕶️ TMR FOUNDERS 🤩 TMR FOUNDERS
						💿 TMR FOUNDERS ☕️ TMR FOUNDERS 💖 TMR
						FOUNDERS 🏢 TMR FOUNDERS ⏰ TMR FOUNDERS 💡
						TMR FOUNDERS 📑 TMR FOUNDERS 🧢 TMR FOUNDERS
						🤖 TMR FOUNDERS 🏆 TMR FOUNDERS ⭐️ TMR
						FOUNDERS 🔥 */}
            </textPath>
          </text>
        </svg>
      </Zoom>
    </Box>
  );
}

export default CircleText;
