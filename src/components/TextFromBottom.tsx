import { animated, useSpring } from '@react-spring/web';
import React, { useEffect } from 'react';

export interface Props {
  open: boolean;
  children: React.ReactNode;
}

function TextFromBottom({ open, children }: Props) {
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }));

  useEffect(() => {
    if (open) textApi.start({ y: '0%' });
    else textApi.start({ y: '100%' });
  }, [open]);

  return (
    <span
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
    >
      <animated.span
        style={{
          display: 'block',
          ...textStyles,
        }}
      >
        {children}
      </animated.span>
    </span>
  );
}

export default TextFromBottom;
