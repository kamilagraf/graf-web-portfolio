import React, { forwardRef } from 'react';
import { Wrapper, Mouse } from './MouseAnimation.styles';

const MouseAnimation = forwardRef((props, ref) => {
  return (
    <Wrapper className="mouse-btn" ref={ref}>
      <a href="#">
        <Mouse>
          <span></span>
        </Mouse>
      </a>
    </Wrapper>
  );
});

export default MouseAnimation;
