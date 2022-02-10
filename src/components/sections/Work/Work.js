import React from 'react';
import PropTypes from 'prop-types';
import { StyledWorkSection } from './Work.styles';
import { Caption } from 'components/atoms/Customs/Customs';
import { Header4 } from 'components/atoms/Headers/Headers';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';
import ButtonPrimary from 'components/atoms/Buttons/ButtonPrimary';
import { ArrowRight } from 'react-swm-icon-pack';

const Work = () => {
  return (
    <StyledWorkSection>
      <Caption className="green">My work 💻</Caption>
      <Header4>
        I provide value to my work buddies around the globe by helping speed up their workflow and enriching their assets library with new,
        <span className="green"> time-saving alternatives.</span>
      </Header4>
      <div className="wrapper">
        <Paragraph>
          If you want to deep dive into code <span className="white">*impatiently*</span>, you can find everything on my GitHub profile.
        </Paragraph>
        <ButtonPrimary IconRight={ArrowRight}>Visit my GitHub profile</ButtonPrimary>
      </div>
    </StyledWorkSection>
  );
};

Work.propTypes = {};

export default Work;
