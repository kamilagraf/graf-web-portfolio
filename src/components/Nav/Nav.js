import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
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
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNav(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledHeader id="navbar" className={showNav ? 'visible' : 'hidden'}>
      <CSSTransition in={fade} classNames="fadedown" timeout={2000}>
        <StyledNav>
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
      </CSSTransition>
    </StyledHeader>
  );
};

export default Nav;
