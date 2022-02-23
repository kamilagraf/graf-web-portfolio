import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}
`;

export const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;

  h1 {
    margin: 80px auto;
    opacity: 2%;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out 0.5s;

    &.fade-in {
      opacity: 1;
      transform: translateY(0px);
      transition: all 0.5s ease-in-out 0.5s;
    }
  }

  .wave {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  .mouse-btn {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      opacity: 2%;
      transform: translateY(20px);
      transition: all 0.5s ease-in-out 1s;

      &.fade-in {
        opacity: 1;
        transform: translateY(0px);
        transition: all 0.5s ease-in-out 1s;
      }
    }

    @media screen and (min-width: 1920px) {
      margin: 70px auto 56px;
    }
  }
`;
