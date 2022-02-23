import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MouseAnimation from 'components/atoms/MouseAnimation/MouseAnimation';
import { Header1 } from 'components/atoms/Headers/Headers';
import { StyledHeroSection } from './Hero.styles';

const Hero = () => {
  const fadeContainer1 = useRef(null);
  const fadeContainer2 = useRef(null);

  useEffect(() => {
    fadeContainer1.current.classList.add('fade-in');
    fadeContainer2.current.classList.add('fade-in');
  }, []);

  return (
    <StyledHeroSection id="hero">
      <Header1 ref={fadeContainer1}>
        Hey, I'm Kamila <span className="wave">👋</span> <br /> I develop tools that make building products <span className="green">effortless</span>.
      </Header1>
      <MouseAnimation ref={fadeContainer2} />
    </StyledHeroSection>
  );
};

Hero.propTypes = {};

export default Hero;
