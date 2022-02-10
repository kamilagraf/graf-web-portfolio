import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 104px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.black.zero};

  @media screen and (min-width: 768px) {
    width: 736px;
  }

  @media screen and (min-width: 1356px) {
    width: 1308px;
    padding: 0 24px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.white.zero};
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 80px;
  }

  a {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.white.ten};
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white.zero};
`;
