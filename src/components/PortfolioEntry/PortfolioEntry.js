import React from 'react';
import PropTypes from 'prop-types';
import { StyledPortfolioEntrySection, StyledTexts, StyledImages } from './PortfolioEntry.styles';
import { Header3 } from 'components/atoms/Headers/Headers';
import ButtonText from 'components/atoms/Buttons/ButtonText';
import { ArrowRight } from 'react-swm-icon-pack';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';
import react01 from 'assets/images/react-icon-pack01.jpg';
import react02 from 'assets/images/react-icon-pack02.jpg';

const PortfolioEntry = () => {
  return (
    <StyledPortfolioEntrySection>
      <StyledTexts>
        <Header3>SWM React Icon Pack</Header3>
        <ButtonText IconRight={ArrowRight}>Download from npm</ButtonText>
        <ButtonText IconRight={ArrowRight}>Learn more on GitHub</ButtonText>
        <Paragraph>
          Carefully prepared icons to help your projects shine like a diamond. More than 1100 icons divided into 4 styles and several categories are
          ready as react components.
        </Paragraph>
        <Paragraph>
          Icons are designed by <span className="green">Daniel Wodziczka</span>.
        </Paragraph>
      </StyledTexts>
      <StyledImages>
        <img className="react01" src={react01} alt="react01" />
        <img className="react02" src={react02} alt="react02" />
      </StyledImages>
    </StyledPortfolioEntrySection>
  );
};

PortfolioEntry.propTypes = {};

export default PortfolioEntry;
