import GradientBackground from '@components/GradientBackground';
import { Box, Collapse, useMediaQuery } from '@mui/material';
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
        {/* <Zoom in style={{ transitionDelay: '1500ms' }}>
          <Box>
            <img src="/images/memoji.png" alt="미모지" height={isMobile ? '150px' : '240px'} />
          </Box>
        </Zoom> */}
        <Collapse orientation="horizontal" in sx={{ transitionDelay: '2000ms' }}>
          <Box>
            {/* <TypeAnimation
              sequence={[2000, '안녕하세요,\n성장하는 프론트엔드 개발자 \n민경배입니다']}
              wrapper="span"
              cursor={false}
              style={{
                fontSize: isMobile ? 32 : 50,
                fontWeight: FontWeightValues.BOLD,

                whiteSpace: 'pre-wrap',
              }}
            /> */}

            <HoverChangingText
              fontSize={isMobile ? 40 : 50}
              text="안녕하세요,"
              alt="👋하세요,"
              sx={{
                mixBlendMode: 'color-burn',
              }}
            />
            <Box display="flex">
              <HoverChangingText
                fontSize={isMobile ? 40 : 50}
                text="성장하는 "
                alt="🌱📈하는"
                sx={{
                  mixBlendMode: 'color-burn',
                }}
              />
              <HoverChangingText
                fontSize={isMobile ? 40 : 50}
                text="FE 개발자,"
                alt="💻📱 🧑‍💻 ,"
                sx={{
                  mixBlendMode: 'color-burn',
                }}
              />
            </Box>
            <HoverChangingText
              fontSize={isMobile ? 40 : 50}
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
        </Collapse>
      </Box>
    </Box>
  );
}

export default IntroSection;
