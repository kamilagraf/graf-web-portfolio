import styled from 'styled-components';

export const Header1 = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 40px;
  line-height: 56px;
  letter-spacing: -0.01em;
  margin: 0;

  span.green {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 94px;
  }

  @media screen and (min-width: 1356px) {
    font-size: 90px;
    line-height: 126px;
  }
`;

export const Header2 = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  line-height: 50px;
  letter-spacing: -0.01em;
  margin: 0;

  span.green {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media screen and (min-width: 768px) {
    font-size: 60px;
    line-height: 84px;
  }

  @media screen and (min-width: 1356px) {
    font-size: 80px;
    line-height: 112px;
  }
`;

export const Header3 = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.01em;
  margin: 0;

  span.green {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
  }

  @media screen and (min-width: 1356px) {
    font-size: 60px;
    line-height: 84px;
  }
`;

export const Header4 = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 26px;
  line-height: 36px;
  letter-spacing: -0.01em;
  margin: 0;

  span.green {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  span.gray {
    color: ${({ theme }) => theme.colors.white.ten};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  span.white {
    color: ${({ theme }) => theme.colors.white.zero};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media screen and (min-width: 768px) {
    font-size: 38px;
    line-height: 52px;
  }

  @media screen and (min-width: 1356px) {
    font-size: 46px;
    line-height: 64px;
  }
`;
