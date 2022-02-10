import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.black.zero};
        color: ${({ theme }) => theme.colors.white.zero};
        font-family: 'DM Sans', sans-serif;

    }
    main {
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        padding: 0 16px;


        @media screen and (min-width: 768px) {
            width: 736px;
        }

        @media screen and (min-width: 1356px) {
        width: 1308px;
        padding: 0 24px;
        }
    }
    section {
       margin: 0 auto;
       padding: 60px 0;

        @media screen and (min-width: 768px) {
        padding: 80px 0;
        }

        @media screen and (min-width: 1356px) {

        padding: 100px 0;
        }

    }
    a, button {
        font-family: 'DM Sans', sans-serif;
    }
`;
