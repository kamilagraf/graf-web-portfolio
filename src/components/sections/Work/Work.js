import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { srConfig } from 'config';
import sr from 'utils/sr';
import { StyledWorkSection } from './Work.styles';
import { Caption } from 'components/atoms/Caption/Caption';
import { Header4 } from 'components/atoms/Headers/Headers';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';
import ButtonPrimary from 'components/atoms/Buttons/ButtonPrimary';
import { ArrowRight } from 'react-swm-icon-pack';

const Work = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig);
  }, []);

  return (
    <StyledWorkSection id="projects" ref={revealContainer}>
      <Caption className="green caption">My work 💻</Caption>
      <Header4>
        I provide value to my work buddies around the globe by helping speed up their workflow and enriching their assets library with new,
        <span className="green"> time-saving alternatives.</span>
      </Header4>
      <div className="wrapper">
        <Paragraph>
          If you want to deep dive into code <span className="white">*impatiently*</span>, you can find everything on my GitHub profile.
        </Paragraph>
        <ButtonPrimary IconRight={ArrowRight} as="a" href="https://github.com/kamilagraf" rel="noopener" target="_blank">
          Visit my GitHub profile
        </ButtonPrimary>
      </div>
    </StyledWorkSection>
  );
};

Work.propTypes = {};

export default Work;
