import styled from 'styled-components';

export const StyledAboutSection = styled.section`
  background-color: #200934;

  .inner {
    display: block;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr 480px;
      grid-gap: 16px;
    }

    @media screen and (min-width: 1356px) {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr 628px;
      grid-gap: 24px;
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

  p {
    margin: 0 0 40px 0;

    @media screen and (min-width: 768px) {
      margin: 0 0 64px 0;
      grid-column: 1 / -1;
      grid-row: 1;
    }

    @media screen and (min-width: 1356px) {
      grid-column: 1 / 7;
      grid-row: 2;
      align-self: start;
    }
  }

  button {
    margin: 0 0 44px 0;

    @media screen and (min-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 2;
      align-self: start;
      margin: 0 122px 104px 0;
    }

    @media screen and (min-width: 1356px) {
      grid-column: 1 / 4;
      justify-self: start;
      margin: 172px 0 0 0;
      align-self: start;
    }
  }

  img {
    width: 100%;
    margin: 16px 0 0 0;
    border-radius: 20px;

    &.deskphoto {
      @media screen and (min-width: 768px) {
        width: 400px;
        height: 320px;
        object-fit: cover;
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        margin: 0;
        align-self: end;
      }

      @media screen and (min-width: 1356px) {
        width: 531px;
        height: 420px;
        grid-column: 4 / 9;
      }
    }

    &.facephoto {
      @media screen and (min-width: 768px) {
        width: 400px;
        height: 377px;
        object-fit: cover;
        grid-column: 3 / -1;
        grid-row: 2;
        align-self: start;
        justify-self: end;
        margin: 0;
        z-index: 3;
      }

      @media screen and (min-width: 1356px) {
        width: 531px;
        height: 500px;
      }
    }
  }
`;

export const LimeRectangle = styled.div`
  display: none;
  width: 240px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.limePrimary.zero};
  border-radius: 22px;

  @media screen and (min-width: 768px) {
    display: block;
    grid-column: 2 / 4;
    grid-row: 2;
    align-self: end;
    justify-self: center;
    margin: 0 0 40px 0;
  }

  @media screen and (min-width: 1356px) {
    grid-column: 7 / 10;
    margin: 0 0 53px 0;
  }
`;

export const StyledText = styled.div``;

export const StyledImages = styled.div``;
