import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, Wrapper } from './Footer.styles';
import Logo from 'components/atoms/Logo/Logo';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Logo />
        <Paragraph isSmall>Have a nice day! ❤️</Paragraph>
      </Wrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
