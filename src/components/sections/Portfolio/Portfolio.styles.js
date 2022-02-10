import styled from 'styled-components';
import { LimeRectangle } from 'components/atoms/LimeRectangle/LimeRectangle';

export const StyledPortfolio = styled.div``;

export const StyledPortfolioSection = styled.section`
  @media screen and (min-width: 1356px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledTexts = styled.div`
  @media screen and (min-width: 1356px) {
    width: 642px;
  }

  h3 {
    margin: 0 0 40px 0;

    @media screen and (min-width: 1356px) {
      margin: 0 0 66px 0;
    }
  }

  button {
    margin: 0 0 48px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 32px 0;
    }
  }

  p:nth-last-child(2) {
    margin: 16px 0 24px 0;

    @media screen and (min-width: 768px) {
      margin: 42px 0 24px 0;
    }

    @media screen and (min-width: 1356px) {
      margin: 92px 0 24px 0;
    }
  }

  p:last-child {
    margin: 0 0 44px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 56px 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.limePrimary.zero};

    &.nounderline {
      text-decoration: none;
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

// export const LimeRect1 = styled(LimeRectangle)`
//   @media screen and (min-width: 768px) {
//     width: 308px;
//     height: 150px;
//     position: absolute;
//     left: 80px;
//     align-self: center;
//   }

//   @media screen and (min-width: 1356px) {
//     left: -50px;
//   }
// `;

// export const LimeRect2 = styled(LimeRectangle)`
//   @media screen and (min-width: 768px) {
//     width: 150px;
//     height: 150px;
//     position: absolute;
//     right: 80px;
//     align-self: center;
//     z-index: 2;
//   }

//   @media screen and (min-width: 1356px) {
//     right: 50px;
//   }
// `;

// export const LimeRect3 = styled(LimeRectangle)`
//   @media screen and (min-width: 768px) {
//     width: 200px;
//     height: 150px;
//     position: absolute;
//     right: 80px;
//     align-self: center;
//     z-index: 2;
//   }

//   @media screen and (min-width: 1356px) {
//     width: 150px;
//     align-self: flex-start;
//     left: -50px;
//     top: -50px;
//   }
// `;
