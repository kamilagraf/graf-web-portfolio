import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/5;

  h1 {
    color: ${({ theme }) => theme.colors.white.zero};
  }
`;
