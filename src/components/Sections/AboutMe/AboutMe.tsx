import { SectionTitle } from "../../../styles/App.style";
import { FormattedMessage } from "react-intl";
import {
  AboutMeArticle,
  AboutMeText,
  TextWrapper,
} from "./styles/AboutMe.style";

export default function AboutMe() {
  return (
    <AboutMeArticle>
      <SectionTitle>
        <FormattedMessage
          description="Biography Title"
          id="main.biography.title"
          defaultMessage="Biography"
        />
      </SectionTitle>
      <TextWrapper>
        <AboutMeText>
          <FormattedMessage
            description="Biography Text"
            id="main.biography.text"
          />
        </AboutMeText>
      </TextWrapper>
    </AboutMeArticle>
  );
}
