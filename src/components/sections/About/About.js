import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { srConfig } from 'config';
import sr from 'utils/sr';
import { StyledAboutSection, LimeRect } from './About.styles';
import { Caption } from 'components/atoms/Caption/Caption';
import { Header4 } from 'components/atoms/Headers/Headers';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';
import ButtonPrimary from 'components/atoms/Buttons/ButtonPrimary';
import { ArrowRight } from 'react-swm-icon-pack';
import deskphoto from 'assets/images/graf-deskphoto.jpg';
import facephoto from 'assets/images/graf-facephoto.jpg';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig);
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <Caption className="green caption">About me 👩</Caption>
      <Header4>
        I'm a developer crazy about bringing <span className="green">something</span> to life from <span className="gray">nothing</span>. My focus is
        on constant learning and using that knowledge in practice as soon as possible - theory is cool but working on your own thing is way{' '}
        <span className="white">:coooler:</span>
      </Header4>
      <div className="inner">
        <Paragraph>
          I’m currently available for a stationary developer position somewhere in Kraków, Poland. If you got something interesting, feel more than
          encouraged to contact me!
        </Paragraph>
        <ButtonPrimary IconRight={ArrowRight} as="a" href="https://www.linkedin.com/in/kamilagraf/" rel="noopener" target="_blank">
          Drop me a line
        </ButtonPrimary>
        <img className="deskphoto" src={deskphoto} alt="Deskphoto" />
        <LimeRect />
        <img className="facephoto" src={facephoto} alt="Facephoto" />
      </div>
    </StyledAboutSection>
  );
};

About.propTypes = {};

export default About;
