import { SectionTitle } from "../../../styles/App.style";
import {
  AboutMeArticle,
  AboutMeText,
  TextWrapper,
} from "./styles/AboutMe.style";

export default function AboutMe() {
  return (
    <AboutMeArticle>
      <SectionTitle>Biography</SectionTitle>
      <TextWrapper>
        <AboutMeText>
          <p>
            I am a programmer with 6 years of experience and graduated in System
            Development Technician, currently studying Computer Science at IFSC.
          </p>
          <br />
          <p>
            With 3 years of professional experience, I have been working on
            challenging projects, creating high-quality solutions for clients,
            and developing personal projects that I am very proud to have worked
            on and learned a lot from them.
          </p>
          <br />
          <p>
            Outside of the programming world, I have been a musician for 12
            years and enjoy spending my free time having fun with friends.
          </p>
        </AboutMeText>
      </TextWrapper>
    </AboutMeArticle>
  );
}
