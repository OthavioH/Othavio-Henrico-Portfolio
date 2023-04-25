import { keyframes } from "styled-components";

export const increaseWidthAnimation = keyframes`
  from {
    width: 290px;
  }
  to {
    width: 100%;
  }
`;

export const decreaseWidthAnimation = keyframes`
  0% {
    width: 100%;
  }
  50% {
    width: 300px;
  }
  100%{
    width: fit-content;
  }
`;

export const fadeAndSlideToLeftInAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const fadeAndSlideToRightInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const underlineTextAnimation = keyframes`
    from {
        width: 0px;
    }
    to {
        width: 100%;
    }
`;

export const upsideDownAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`;

export const inverseUpsideDownAnimation = keyframes`
    from {
        transform: rotate(180deg);
    } 
    to {
        transform: rotate(0deg);
    }
`;
