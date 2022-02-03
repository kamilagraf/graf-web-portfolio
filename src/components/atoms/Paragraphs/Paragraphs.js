import styled from 'styled-components';

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ isSmall }) => (isSmall ? '18px' : '20px')};
  line-height: ${({ isSmall }) => (isSmall ? '28px' : '30px')};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? '20px' : '22px')};
    line-height: ${({ isSmall }) => (isSmall ? '30px' : '34px')};
  }

  @media screen and (min-width: 1356px) {
    font-size: ${({ isSmall }) => (isSmall ? '22px' : '24px')};
    line-height: ${({ isSmall }) => (isSmall ? '34px' : '36px')};
  }
`;
