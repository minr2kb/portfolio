/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box } from '@mui/material';
import { useScroll } from '@react-spring/web';
import ContactSection from '@sections/ContactSection';
import EducationSection from '@sections/EducationSection';
import ExperienceSection from '@sections/ExperienceSection';
import Footer from '@sections/Footer';
import SkillSection from '@sections/SkillSection';
import TopNav from '@sections/TopNav';
import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import IntroSection from '~/sections/v2/IntroSection';
import ProjectSection from '~/sections/v2/ProjectSection';

function HomeV2() {
  const [scrollEl, setScrollElement] = useState<HTMLDivElement | null>(null);

  const [startedScroll, setStartedScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);

  const { scrollY } = useScroll({
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
    <ParallaxProvider scrollContainer={scrollEl ?? undefined}>
      <Box
        ref={containerRef}
        sx={{
          height: '100vh',
          width: '100vw',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Outer Container */}

        <TopNav
          startedScroll={startedScroll}
          scrollY={scrollY}
          pageHeight={
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            innerRef.current && containerRef.current
              ? innerRef.current.clientHeight - containerRef.current.clientHeight
              : 1
          }
        />
        {/* <GradientBackground filter /> */}
        <Box ref={innerRef} sx={{ width: '100%' }}>
          <IntroSection />
          <Box sx={{ mx: 'auto', maxWidth: '740px', p: 4 }}>
            {/* <StepperSample /> */}

            {/* SECTION: Education */}
            <Box
              pt={10}
              id="education"
              // sx={{
              // 	p: 3,
              // 	boxShadow: "0px 8px 20px 2px rgba(0,0,0,0.1)",
              // 	borderRadius: "20px",
              // }}
            >
              <EducationSection open />
            </Box>

            {/* SECTION: Experiences */}
            <Box pt={10} id="experiences">
              <ExperienceSection open />
            </Box>

            {/* SECTION: Skills */}
            <Box pt={10} id="skills">
              <SkillSection />
            </Box>

            {/* SECTION: Projects */}
            <Box pt={10} id="projects">
              <ProjectSection />
            </Box>

            {/* SECTION: Contacts */}
            <Box pt={10} id="contacts">
              <ContactSection />
            </Box>

            {/* SECTION: Footer */}
            <Box pt={10} component="footer">
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </ParallaxProvider>
  );
}

export default HomeV2;
