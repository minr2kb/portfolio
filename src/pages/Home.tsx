/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Grid } from '@mui/material';
import { useScroll } from '@react-spring/web';
import Footer from '@sections/Footer';
import EducationSection from '@sections/v1/EducationSection';
import ExperienceSection from '@sections/v1/ExperienceSection';
import SkillSection from '@sections/v1/SkillSection';
import TopNav from '@sections/v1/TopNav';
import { useRef, useState } from 'react';
import useBrowserThemeColor from '~/hooks/useBrowserThemeColor';
import useRangeSwitch from '~/hooks/useRangeSwitch';
import ContactSection from '~/sections/v1/ContactSection';
import IntroSection from '~/sections/v1/IntroSection';
import ProjectSection from '~/sections/v1/ProjectSection';

function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);

  useBrowserThemeColor('#1ECCA2');

  const [openAcaTexts, onAcaTextsRange] = useRangeSwitch();
  const [openExeTexts, onExeTextsRange] = useRangeSwitch();
  const [startedScroll, setStartedScroll] = useState(false);

  const { scrollY } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollY } }) => {
      setStartedScroll(scrollY > 0);
      onAcaTextsRange(scrollY, 500);
      onExeTextsRange(scrollY, 900);
    },
    default: {
      immediate: true,
    },
  });

  return (
    <Grid ref={containerRef} sx={{ height: '100vh', overflow: 'auto' }}>
      {/* Outer Container */}
      <Grid ref={innerRef} sx={{ mx: 'auto', maxWidth: '960px', p: 3 }}>
        {/* Inner Container */}
        <Grid>
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
          <Grid
            sx={{
              position: 'relative',
            }}
          >
            {/* SECTION: Intro */}
            <Grid id="intro">
              <IntroSection />
            </Grid>

            {/* SECTION: Education */}
            <Grid pt={10} id="education">
              <EducationSection open={openAcaTexts} />
            </Grid>

            {/* SECTION: Experiences */}
            <Grid pt={10} id="experiences">
              <ExperienceSection open={openExeTexts} />
            </Grid>

            {/* SECTION: Skills */}
            <Grid pt={10} id="skills">
              <SkillSection />
            </Grid>

            {/* SECTION: Projects */}
            <Grid pt={10} id="projects">
              <ProjectSection />
            </Grid>

            {/* SECTION: Contacts */}
            <Grid pt={10} id="contacts">
              <ContactSection />
            </Grid>

            {/* SECTION: Footer */}
            <Grid pt={10} component="footer">
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
