import React from 'react';
import PropTypes from 'prop-types';
import { StyledPortfolio, StyledPortfolioSection, StyledTexts, StyledImages, LimeRect } from './Portfolio.styles';
import { Header3 } from 'components/atoms/Headers/Headers';
import ButtonText from 'components/atoms/Buttons/ButtonText';
import { ArrowRight } from 'react-swm-icon-pack';
import { Paragraph } from 'components/atoms/Paragraphs/Paragraphs';

import react01 from 'assets/images/react-icon-pack01.jpg';
import react02 from 'assets/images/react-icon-pack02.jpg';
import figma01 from 'assets/images/figma-plugin01.jpg';
import figma02 from 'assets/images/figma-plugin02.jpg';
import browser01 from 'assets/images/icon-browser01.jpg';
import browser02 from 'assets/images/icon-browser02.jpg';

const Portfolio = () => {
  return (
    <StyledPortfolio className="portfolio">
      <StyledPortfolioSection>
        <StyledTexts>
          <Header3>SWM React Icon Pack</Header3>
          <ButtonText IconRight={ArrowRight}>Download from npm</ButtonText>
          <ButtonText IconRight={ArrowRight}>Learn more on GitHub</ButtonText>
          <Paragraph>
            Carefully prepared icons to help your projects shine like a diamond. More than 1100 icons divided into 4 styles and several categories are
            ready as react components.
          </Paragraph>
          <Paragraph>
            Icons are designed by{' '}
            <a className="nounderline" href={'https://google.com'} target="_blank" rel="noreferrer">
              Daniel Wodziczka
            </a>
            .
          </Paragraph>
        </StyledTexts>
        <StyledImages>
          <img className="react01" src={react01} alt="react01" />
          <LimeRect className="rect01" />
          <img className="react02" src={react02} alt="react02" />
        </StyledImages>
      </StyledPortfolioSection>
      <StyledPortfolioSection>
        <StyledTexts>
          <Header3>Icon Pack Figma Plugin</Header3>
          <ButtonText IconRight={ArrowRight}>Check on Figma Community</ButtonText>
          <ButtonText IconRight={ArrowRight}>Learn more on GitHub</ButtonText>
          <Paragraph>
            Thanks to Figma plugin, now everyone can browse and use{' '}
            <a href={'https://google.com'} target="_blank" rel="noreferrer">
              SWM Icon Pack
            </a>{' '}
            within their Figma files and not waste time on importing it from somewhere else.
          </Paragraph>
          <Paragraph>Everyone can find suitable icons by selecting proper style, searching by keywords or simply scrolling.</Paragraph>
        </StyledTexts>
        <StyledImages>
          <img className="figma01" src={figma01} alt="figma01" />
          <LimeRect className="rect02" />
          <img className="figma02" src={figma02} alt="figma02" />
        </StyledImages>
      </StyledPortfolioSection>
      <StyledPortfolioSection>
        <StyledTexts>
          <Header3>Icon Pack Web Browser</Header3>
          <ButtonText IconRight={ArrowRight}>Check live version</ButtonText>
          <ButtonText IconRight={ArrowRight}>Learn more on GitHub</ButtonText>
          <Paragraph>
            Web SWM Icon Pack Browser ready to make searching and selecting perfect icons for every situation enjoyable experience.
          </Paragraph>
          <Paragraph>
            It contains a filtering feature by styles and categories, downloading exact SVGs, and a reminder of how to render icons as react
            components.
          </Paragraph>
        </StyledTexts>
        <StyledImages>
          <img className="browser01" src={browser01} alt="browser01" />
          <LimeRect className="rect03" />
          <img className="browser02" src={browser02} alt="browser02" />
        </StyledImages>
      </StyledPortfolioSection>
    </StyledPortfolio>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
