import { keyframes } from "styled-components";

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
