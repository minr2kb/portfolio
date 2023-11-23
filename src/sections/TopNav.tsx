import { FontWeightValues } from '@interface/enums';
import { Box, useMediaQuery } from '@mui/material';
import { animated, type SpringValue } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';
import { mobileMaxWidthMediaQuery } from '~/theme';

export interface Props {
  startedScroll?: boolean;
  scrollY: SpringValue<number>;
  pageHeight: number;
}

function TopNav({ startedScroll = false, scrollY, pageHeight }: Props) {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        top: startedScroll ? 10 : 0,
        left: startedScroll ? 10 : 0,
        width: startedScroll ? 'calc(100vw - 20px)' : '100vw',
        height: isMobile ? '50px' : '60px',
        borderRadius: startedScroll ? '30px' : 0,
        alignItems: 'center',
        bgcolor: startedScroll ? 'rgba(255,255,255,0.3)' : 'none',
        zIndex: 2,
        transition: 'all 0.2s ease-in-out',
        boxShadow: startedScroll ? '0px 0px 7px 2px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: startedScroll ? 'blur(10px)' : 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          px: 3,
        }}
      >
        <TypeAnimation
          sequence={['Portfolio']}
          wrapper="span"
          cursor={false}
          style={{
            fontSize: isMobile ? 18 : 22,
            fontWeight: FontWeightValues.BOLD,
          }}
        />
        <Box
          sx={{
            mx: 2,
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            minHeight: '15px',
            borderRadius: '5px',
          }}
        >
          <animated.div
            style={{
              width: scrollY.to(val => `${Math.max(Math.min(val / pageHeight, 1), 0) * 100}%`),
              height: '1px',
              backgroundColor: ' #1ECCA2',
            }}
          />
          <animated.div
            style={{
              width: scrollY.to(val => `${Math.max(Math.min(1 - val / pageHeight, 1), 0) * 100}%`),
              height: '1px',
              backgroundColor: 'rgba(0,0,0,0.2)',
            }}
          />
        </Box>
        <a
          href="https://tmr-card.web.app/ben"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <TypeAnimation
            sequence={[1000, 'by. 경배 민']}
            wrapper="span"
            cursor={false}
            style={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: FontWeightValues.BOLD,
            }}
          />

          <img
            src="/images/memoji.png"
            alt="미모지"
            style={{
              transition: 'all 0.2s ease-in-out',
              width: startedScroll ? '30px' : 0,
              marginTop: '2px',
            }}
          />
        </a>
      </Box>
    </Box>
  );
}

export default TopNav;
