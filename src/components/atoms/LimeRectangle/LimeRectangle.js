import styled from 'styled-components';

export const LimeRectangle = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.limePrimary.zero};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
