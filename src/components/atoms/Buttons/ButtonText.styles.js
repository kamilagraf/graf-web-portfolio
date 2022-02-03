import styled from 'styled-components';

export const StyledButtonText = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.white.zero};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 20px;
  line-height: 24px;
  margin: 0;

  svg.icon-left {
    margin-right: 11px;
  }

  svg.icon-right {
    margin-left: 11px;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.colors.limePrimary.zero};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.limePrimary.zero};
      }
    }
  }

  &:active {
    p {
      color: ${({ theme }) => theme.colors.limePrimary.twenty};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.limePrimary.twenty};
      }
    }
  }

  &:disabled {
    p {
      color: ${({ theme }) => theme.colors.black.thirty};
    }

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.black.thirty};
      }
    }
  }
`;
