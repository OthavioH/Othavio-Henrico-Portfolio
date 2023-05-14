import {
  ProfileIcon,
  ProfileIconWrapper,
  ProfileName,
  Role,
  SideBarHeaderWrapper,
} from "../styles/SideProfileInfo.style";

export default function SideBarHeader() {
  return (
    <SideBarHeaderWrapper>
      <ProfileIconWrapper>
        <ProfileIcon />
      </ProfileIconWrapper>
      <ProfileName>Othavio Henrico</ProfileName>
      <Role>FullStack Developer</Role>
    </SideBarHeaderWrapper>
  );
}
