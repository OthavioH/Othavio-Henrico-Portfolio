import SideStackComponent from "../SideStackComponent/SideStackComponent";
import SocialLinks from "../SocialLinks/SocialLinkts";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import {
  LinksWrapper,
  SectionTitle,
  SideBar,
} from "./styles/SideProfileInfo.style";

export default function SideProfileInfo() {
  return (
    <SideBar>
      <SideBarHeader />
      <SectionTitle>Stacks</SectionTitle>
      <SideStackComponent title="React JS" imgUrl="react_icon.png" />
      <SideStackComponent title="Node JS" imgUrl="node_icon.png" />
      <SideStackComponent title="Angular" imgUrl="angular_icon.png" />
      <SideStackComponent title="Java" imgUrl="java_icon.png" />
      <SideStackComponent title="Flutter" imgUrl="flutter_icon.png" />
      <SectionTitle>Social Media</SectionTitle>
      <LinksWrapper>
        <SocialLinks
          title="LinkedIn"
          imgUrl="linkedin_icon.png"
          url="https://linkedin.com/in/othavioh"
        />
        <SocialLinks
          title="GitHub"
          imgUrl="github_icon.png"
          url="https://github.com/OthavioH"
        />
      </LinksWrapper>
    </SideBar>
  );
}
