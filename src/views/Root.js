import React from 'react';
import { Wrapper, MainContainer } from './Root.styles';
import Nav from 'components/Nav/Nav';
import Hero from 'components/sections/Hero/Hero';
import About from 'components/sections/About/About';
import Work from 'components/sections/Work/Work';
import Portfolio from 'components/sections/Portfolio/Portfolio';
import Contact from 'components/sections/Contact/Contact';
import Footer from 'components/Footer/Footer';

const Root = () => {
  return (
    <Wrapper>
      <Nav />
      <MainContainer>
        <Hero />
        <About />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </MainContainer>
    </Wrapper>
  );
};

export default Root;
