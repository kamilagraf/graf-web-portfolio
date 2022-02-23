import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 104px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.black.zero};
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 736px;

    &.visible {
      visibility: visible;
      transition: all 0.3s;
    }

    &.hidden {
      visibility: hidden;
      transition: all 0.3s;
      transform: translateY(-100%);
    }
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

  opacity: 0.1;
  transform: translateY(-20px);
  transition: all 0.5s ease-in-out;

  &.fade-down {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.5s ease-in-out;
  }
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
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white.zero};
    transition: all 0.25s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.white.twenty};
    }

    &:active,
    &:focus {
      color: ${({ theme }) => theme.colors.limePrimary.zero};
      transition: none;
    }
  }
`;
