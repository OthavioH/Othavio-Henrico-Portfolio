import SideStackComponent from "../SideStackComponent/SideStackComponent";
import SocialLinks from "../SocialLinks/SocialLinkts";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
// import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import {
  LinksWrapper,
  DivisionTitle,
  SideBar,
  SideBarBio,
  SideBarStacksList,
  // LanguageWrapper,
  // SwitchLanguageSelect,
} from "./styles/SideProfileInfo.style";
// import { Language, changeLanguage } from "../../../redux/slices/languageSlice";

export default function SideProfileInfo() {
  // const dispatch = useDispatch();

  return (
    <SideBar>
      {/* <LanguageWrapper>
        <SwitchLanguageSelect
          onChange={(e) => {
            dispatch(changeLanguage(e.target.value as Language));
          }}
        >
          <option value="pt-br">PT-BR</option>
          <option value="en">EN</option>
        </SwitchLanguageSelect>
      </LanguageWrapper> */}
      <SideBarHeader />
      <SideBarBio>
        <DivisionTitle>Stacks</DivisionTitle>
        <SideBarStacksList>
          <SideStackComponent title="React" imgUrl="react_icon.png" />
          <SideStackComponent title="Next" imgUrl="next_icon.svg" />
          <SideStackComponent title="Node" imgUrl="node_icon.png" />
          <SideStackComponent title="Angular" imgUrl="angular_icon.png" />
          <SideStackComponent title="Java" imgUrl="java_icon.png" />
          <SideStackComponent title="Flutter" imgUrl="flutter_icon.png" />
        </SideBarStacksList>
        <DivisionTitle>
          <FormattedMessage
            description="Social Media Title"
            id="sidebar.socialMediaTitle"
            defaultMessage="Social Media"
          />
        </DivisionTitle>
        <LinksWrapper>
          <SocialLinks
            title="LinkedIn"
            imgUrl="linkedin.svg"
            hoverImgUrl="linkedin_green.svg"
            url="https://linkedin.com/in/othavioh"
          />
          <SocialLinks
            title="GitHub"
            imgUrl="github.svg"
            hoverImgUrl="github_green.svg"
            url="https://github.com/OthavioH"
          />
        </LinksWrapper>
      </SideBarBio>
    </SideBar>
  );
}
