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
    display: none;
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    display: flex;
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const fadeAndSlideUpInAnimation = keyframes`
  from {
    display: none;
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    display: flex;
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

export const sideBarHeaderAnimation = keyframes`
  0% {
    transform: scale(0.05) translateX(400%);
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(1) translateX(0%);
    opacity: 1;
  }
`;

export const sideBarHeaderAnimationMobile = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const sideBarBioAnimation = keyframes`
  0% {
    transform: translateY(-25%);
    opacity: 0; 
  }
  50%{
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;
