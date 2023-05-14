import styled from "styled-components";
import { SectionArticle } from "../../../../styles/App.style";
import { fadeAndSlideToLeftInAnimation } from "../../../../styles/Animations.style";

export const TextWrapper = styled.div`
  width: 100%;
  padding: 22px;
  box-shadow: 0px 0px 10px 0px rgba(198, 198, 198, 0.5);
  border: 2px solid rgba(137, 249, 109, 0.6);
  border-radius: 16px;
`;

export const AboutMeText = styled.p`
  width: 100%;
  font-size: 16px;

  text-align: justify;
`;

export const AboutMeArticle = styled(SectionArticle)`
  animation: ${fadeAndSlideToLeftInAnimation} 1.5s ease-out;
`;
