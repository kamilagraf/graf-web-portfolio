import styled from 'styled-components';

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ isSmall }) => (isSmall ? '18px' : '20px')}
  line-height: ${({ isSmall }) => (isSmall ? '28px' : '30px')}
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? '20px' : '22px')}
    line-height: ${({ isSmall }) => (isSmall ? '30px' : '34px')}
  }

  @media screen and (min-width: 1366px) {
    font-size: ${({ isSmall }) => (isSmall ? '22px' : '24px')}
    line-height: ${({ isSmall }) => (isSmall ? '34px' : '36px')}
  }
`;

export const ParagraphButton = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;

export const ParagraphCaption = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin: 0;
`;
