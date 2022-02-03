import React from 'react';
import PropTypes from 'prop-types';
import MouseAnimation from 'components/atoms/MouseAnimation/MouseAnimation';
import { Header1 } from 'components/atoms/Headers/Headers';
import { StyledHeroSection } from './Hero.styles';

const Hero = () => {
  return (
    <StyledHeroSection>
      <Header1>
        Hey, I'm Kamila <span className="wave">👋</span> <br /> I develop tools that make building products <span className="green">effortless</span>.
      </Header1>
      <MouseAnimation />
    </StyledHeroSection>
  );
};

Hero.propTypes = {};

export default Hero;
