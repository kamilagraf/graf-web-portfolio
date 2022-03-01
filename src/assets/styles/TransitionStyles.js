import { css } from 'styled-components';

const TransitionStyles = css`
  .fadeup-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &.mouse-btn {
      transition-delay: 0.2s;
    }
  }

  .fadedown-enter {
    opacity: 0;
    transform: translateY(-30px);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default TransitionStyles;
