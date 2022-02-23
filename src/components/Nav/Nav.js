import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLinks } from './Nav.styles';
import Logo from 'components/atoms/Logo/Logo';

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
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const fadeContainer = useRef(null);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNav(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    fadeContainer.current.classList.add('fade-down');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledHeader id="navbar" className={showNav ? 'visible' : 'hidden'}>
      <StyledNav ref={fadeContainer}>
        <Logo />
        <StyledLinks>
          <ul>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  {/* <NavLink to={url}>{name}</NavLink> */}
                  <a href={url}>{name}</a>
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
