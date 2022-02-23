import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white.zero};
`;

const Logo = () => <StyledLogo>Graf.</StyledLogo>;

Logo.propTypes = {};

export default Logo;
