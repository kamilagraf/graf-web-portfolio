import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MouseAnimation from 'components/atoms/MouseAnimation/MouseAnimation';
import { Header1 } from 'components/atoms/Headers/Headers';
import { StyledHeroSection } from './Hero.styles';

const Hero = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <StyledHeroSection id="hero">
      <CSSTransition in={fade} classNames="fadeup" timeout={2000}>
        <Header1>
          Hey, I'm Kamila <span className="wave">👋</span> <br /> I develop tools that make building products{' '}
          <span className="green">effortless</span>.
        </Header1>
      </CSSTransition>
      <CSSTransition in={fade} classNames="fadeup" timeout={2000}>
        <MouseAnimation />
      </CSSTransition>
    </StyledHeroSection>
  );
};

export default Hero;
