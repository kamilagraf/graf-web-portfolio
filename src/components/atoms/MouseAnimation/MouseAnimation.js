import React from 'react';
import { Wrapper, Mouse } from './MouseAnimation.styles';

const MouseAnimation = () => {
  return (
    <Wrapper className="mouse-btn">
      <a href="#">
        <Mouse>
          <span></span>
        </Mouse>
      </a>
    </Wrapper>
  );
};

export default MouseAnimation;
