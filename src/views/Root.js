import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MainContainer } from './Root.styles';
import Nav from 'components/Nav/Nav';
import Hero from 'components/sections/Hero/Hero';
import About from 'components/sections/About/About';

const Root = () => {
  return (
    <Wrapper>
      <Nav />
      <MainContainer>
        <Hero />
        <About />
      </MainContainer>
    </Wrapper>
  );
};

Root.propTypes = {};

export default Root;
