import styled from 'styled-components';

export const Caption = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin: 0 0 24px;

  &.green {
    color: ${({ theme }) => theme.colors.limePrimary.zero};
  }
`;
