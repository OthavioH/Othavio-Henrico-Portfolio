import SideStackComponent from "../SideStackComponent/SideStackComponent";
import SocialLinks from "../SocialLinks/SocialLinkts";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import {
  LinksWrapper,
  DivisionTitle,
  SideBar,
} from "./styles/SideProfileInfo.style";

export default function SideProfileInfo() {
  return (
    <SideBar>
      <SideBarHeader />
      <DivisionTitle>Stacks</DivisionTitle>
      <SideStackComponent title="React JS" imgUrl="react_icon.png" />
      <SideStackComponent title="Node JS" imgUrl="node_icon.png" />
      <SideStackComponent title="Angular" imgUrl="angular_icon.png" />
      <SideStackComponent title="Java" imgUrl="java_icon.png" />
      <SideStackComponent title="Flutter" imgUrl="flutter_icon.png" />
      <DivisionTitle>Social Media</DivisionTitle>
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
