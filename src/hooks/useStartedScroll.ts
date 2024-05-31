import { useScroll } from '@react-spring/web';
import { useState } from 'react';

const useStartedScroll = (containerRef: React.MutableRefObject<HTMLElement>) => {
  const [startedScroll, setStartedScroll] = useState(false);

  const { scrollY } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollY } }) => {
      setStartedScroll(scrollY > 0);
    },
    default: {
      immediate: true,
    },
  });

  return { startedScroll, scrollY };
};

export default useStartedScroll;
