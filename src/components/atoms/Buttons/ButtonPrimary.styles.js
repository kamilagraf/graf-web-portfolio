import styled from 'styled-components';

export const StyledButtonPrimary = styled.button`
  background-color: ${({ theme }) => theme.colors.limePrimary.zero};
  border-radius: 1000px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 16px 24px;

  p {
    color: ${({ theme }) => theme.colors.black.zero};
  }

  svg.icon-left {
    margin-right: 11px;
  }

  svg.icon-right {
    margin-left: 11px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.limePrimary.ten};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.limePrimary.twenty};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black.ten};

    p {
      color: ${({ theme }) => theme.colors.white.twenty};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.white.twenty};
      }
    }
  }
`;
