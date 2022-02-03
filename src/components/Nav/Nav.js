import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLinks, Logo } from './Nav.styles';

const navLinks = [
  {
    name: 'About me',
    url: '/#about',
  },
  {
    name: 'My work',
    url: '/#projects',
  },
  {
    name: "Let's talk",
    url: '/#contact',
  },
];

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo>Graf.</Logo>
        <StyledLinks>
          <ul>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <NavLink to={url} activeclassname="active-link">
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {};

export default Nav;
