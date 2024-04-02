/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, useMediaQuery } from '@mui/material';
import { useScroll } from '@react-spring/web';
import Footer from '@sections/Footer';
import EducationSection from '@sections/v2/EducationSection';
import ExperienceSection from '@sections/v2/ExperienceSection';
import IntroSection from '@sections/v2/IntroSection';
import ProjectSection from '@sections/v2/ProjectSection';
import SkillSection from '@sections/v2/SkillSection';
import TopNav from '@sections/v2/TopNav';
import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ContactSection from '~/sections/v1/ContactSection';
import { mobileMaxWidthMediaQuery } from '~/theme';

function HomeV2() {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  const [scrollEl, setScrollElement] = useState<HTMLDivElement | null>(null);
  const [startedScroll, setStartedScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);

  useScroll({
    container: containerRef,
    onChange: ({ value: { scrollY } }) => {
      setStartedScroll(scrollY > 0);
    },
    default: {
      immediate: true,
    },
  });

  useEffect(() => {
    setScrollElement(containerRef.current);
  }, [containerRef.current]);

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#1ECCA2');
  }, []);

  return (
    <>
      <TopNav startedScroll={startedScroll} />
      <ParallaxProvider scrollContainer={scrollEl ?? undefined}>
        {/* Outer Container */}
        <Box
          ref={containerRef}
          sx={{
            height: '100vh',
            width: '100vw',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Box id="intro" sx={{ width: '100%' }}>
            <IntroSection />

            <Box component="main" sx={{ mx: 'auto', maxWidth: '640px', p: 3 }}>
              {/* SECTION: Education */}
              <Box pt={10} id="education" component="section">
                <EducationSection open parallax={!isMobile} />
              </Box>

              {/* SECTION: Experiences */}
              <Box pt={10} id="experience" component="section">
                <ExperienceSection open parallax={!isMobile} />
              </Box>

              {/* SECTION: Skills */}
              <Box pt={10} id="skills" component="section">
                <SkillSection />
              </Box>

              {/* SECTION: Projects */}
              <Box pt={10} id="projects" component="section">
                <ProjectSection />
              </Box>

              {/* SECTION: Contacts */}
              <Box pt={10} id="contacts" component="section">
                <ContactSection />
              </Box>
            </Box>

            {/* SECTION: Footer */}

            <Box component="footer" sx={{ mx: 'auto', maxWidth: '640px', p: 3, pt: 10 }}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </ParallaxProvider>
    </>
  );
}

export default HomeV2;
