import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black.zero};
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.black.zero};

  @media screen and (min-width: 768px) {
    width: 768px;
    grid-template-columns: repeat(4, 172px);
  }

  @media screen and (min-width: 1356px) {
    width: 1356px;
    grid-template-columns: repeat(12, 87px);
    column-gap: 24px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Div1 = styled.div`
  height: 100vh;
  grid-column: 1 / 1;
  background-color: red;
`;
