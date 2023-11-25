import { Box, useMediaQuery } from '@mui/material';
import GradientBackground from '~/components/GradientBackground';
import HoverChangingText from '~/components/HoverChangingText';
import { mobileMaxWidthMediaQuery } from '~/theme';

function IntroSection() {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <GradientBackground filter />
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '10%',
          bottom: 0,
          left: 0,
          background: 'linear-gradient(transparent, #FFF)',
        }}
      />

      <Box
        sx={{
          display: isMobile ? 'block' : 'flex',
          mx: isMobile ? 0 : 'auto',
          p: 3,
        }}
      >
        <Box>
          {/* <TypeAnimation
            sequence={[0, '안녕하세요,\n성장하는 FE 개발자 \n민경배입니다']}
            wrapper="div"
            cursor={false}
            style={{
              fontSize: isMobile ? 40 : 60,
              fontWeight: FontWeightValues.BOLD,
              mixBlendMode: 'color-burn',
              whiteSpace: 'pre-wrap',
              transform: 'translate3d(0,0,0)',
            }}
          /> */}

          <HoverChangingText
            fontSize={isMobile ? 40 : 54}
            text="안녕하세요,"
            alt="👋하세요,"
            sx={{
              mixBlendMode: 'color-burn',
              transform: 'translate3d(0,0,0)',
            }}
          />
          <Box display="flex">
            <HoverChangingText
              fontSize={isMobile ? 40 : 54}
              text="성장하는 "
              alt="🌱📈하는"
              sx={{
                mixBlendMode: 'color-burn',
              }}
            />
            <HoverChangingText
              fontSize={isMobile ? 40 : 54}
              text="FE 개발자,"
              alt="💻📱 🧑‍💻 ,"
              sx={{
                mixBlendMode: 'color-burn',
              }}
            />
          </Box>
          <HoverChangingText
            fontSize={isMobile ? 40 : 54}
            text="민경배입니다"
            alt={
              <Box display="flex">
                <img src="/images/memoji.png" alt="미모지" height={isMobile ? '60px' : '65px'} />
                입니다
              </Box>
            }
            sx={{
              mixBlendMode: 'color-burn',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default IntroSection;
