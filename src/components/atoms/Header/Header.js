import React from 'react';
import PropTypes from 'prop-types';
import { Header1 } from '../Headers/Headers';
import { Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Header1>Hey, I’m Kamila 👋 </Header1>
      <Header1>I develop tools that make building products effortless.</Header1>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
