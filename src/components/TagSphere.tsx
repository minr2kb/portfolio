import { Box } from '@mui/material';
import TagCloud, { type TagCloudOptions } from 'TagCloud';
import { useEffect, useRef } from 'react';
import useDeviceQuery from '~/hooks/useDeviceQuery';

function TagSphere() {
  const { isMobile } = useDeviceQuery();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tagCloudRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const container = '#tagcloud';
    const elem = document.getElementById('tagcloud');
    if (!elem) return;

    elem.innerHTML = '';
    const texts = [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'TypeScript',
      'MUI',
      'NodeJS',
      'Yarn',
      'NX',
      'NextJS',
      'ThreeJS',
      'Recoil',
      'Firebase',
      'Github',
      'VSCode',
      'Flutter',
      'NPM',
      'Webpack',
      'Nginx',
    ];

    const options: TagCloudOptions = {
      radius: isMobile ? 200 : 300,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, [isMobile]);

  useEffect(() => {
    const items = document.getElementsByClassName('tagcloud--item');
    if (items.length > 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < items.length; i++) {
        if (!items[i].innerHTML.includes('img')) {
          items[i].innerHTML = `<img src='/images/stackIcon/${
            items[i].innerHTML
          }.png' style="width: ${isMobile ? '40px' : '50px'};"/>`;
        }
      }
    }
  }, [tagCloudRef.current, isMobile]);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      <Box
        id="tagcloud"
        ref={tagCloudRef}
        sx={{
          fontSize: isMobile ? 28 : 32,
          zIndex: -1,
        }}
      />
    </Box>
  );
}

export default TagSphere;
