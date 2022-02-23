import styled from 'styled-components';

export const StyledWorkSection = styled.section`
  padding-top: 150px;

  .wrapper {
    @media screen and (min-width: 1356px) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 24px;
    }
  }
  a {
    transition: all 0.25s ease-in-out;

    @media screen and (min-width: 768px) {
      width: 300px;
    }

    @media screen and (min-width: 1356px) {
      grid-column: 8 / 12;
      align-self: start;
      justify-self: start;
    }
  }

  h4 {
    margin: 0 0 40px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 80px 0;
    }

    @media screen and (min-width: 1356px) {
      margin: 0 0 100px 0;
    }
  }

  p:not(.caption) {
    margin: 0 0 40px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 64px 0;
    }

    @media screen and (min-width: 1356px) {
      grid-column: 1 / 7;
      margin: 0;
    }
  }
`;
