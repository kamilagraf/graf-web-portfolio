import styled, { keyframes } from 'styled-components';
import { LimeRectangle } from 'components/atoms/LimeRectangle/LimeRectangle';

const arrowAnimation = keyframes`
	0% {
		transform: translateX(0);
	}
  50% {
		transform: translateX(8px);
	}
  0% {
		transform: translateX(0);
	}
`;

export const StyledPortfolio = styled.div``;

export const StyledPortfolioSection = styled.section`
  @media screen and (min-width: 1356px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledTexts = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1356px) {
    width: 642px;
  }

  h3 {
    margin: 0 0 24px 0;
  }

  p:nth-last-child(2) {
    margin: 48px 0 24px 0;

    @media screen and (min-width: 768px) {
      margin: 58px 0 24px 0;
    }

    @media screen and (min-width: 1356px) {
      margin: 108px 0 24px 0;
    }
  }

  p:last-child {
    margin: 0 0 44px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 56px 0;
    }

    @media screen and (min-width: 1356px) {
      margin: 0;
    }
  }

  a.link-btn {
    margin: 0 0 8px 0;
    align-self: start;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      &:after {
        width: 100%;
      }
      svg {
        animation: ${arrowAnimation} 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      bottom: 0.15em;
      background-color: ${({ theme }) => theme.colors.limePrimary.zero};
      transition: all 0.4s ease-in-out;
      opacity: 0.8;
    }

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  a.link {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
    text-decoration: none;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      bottom: 0.35em;
      background-color: ${({ theme }) => theme.colors.limePrimary.zero};
      transition: all 0.4s ease-in-out;
      opacity: 0.8;
    }
  }
`;

export const StyledImages = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1356px) {
    width: 531px;
  }

  img {
    margin: 8px 0;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;

    &.react02 {
      z-index: 1;
    }

    &.figma01 {
      z-index: 3;
    }

    &.figma02 {
      z-index: 1;
    }

    &.browser02 {
      z-index: 2;
    }

    @media screen and (min-width: 768px) {
      margin: 12px 0;
      border-radius: 40px;
    }

    @media screen and (min-width: 1356px) {
      border-radius: 30px;
    }
  }
`;

export const LimeRect = styled(LimeRectangle)`
  @media screen and (min-width: 768px) {
    position: absolute;
    align-self: center;

    &.rect01 {
      width: 308px;
      height: 150px;
      left: 80px;
    }

    &.rect02 {
      width: 150px;
      height: 150px;
      right: 80px;
      z-index: 2;
    }

    &.rect03 {
      width: 200px;
      height: 150px;
      right: 80px;
      z-index: 2;
    }
  }

  @media screen and (min-width: 1356px) {
    &.rect01 {
      left: -50px;
    }

    &.rect02 {
      right: 50px;
    }

    &.rect03 {
      width: 150px;
      align-self: flex-start;
      left: -50px;
      top: -50px;
    }
  }
`;
