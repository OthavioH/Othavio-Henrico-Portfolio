import {
  ProfileIcon,
  ProfileIconWrapper,
  ProfileName,
  Role,
} from "../styles/SideProfileInfo.style";

export default function SideBarHeader() {
  return (
    <>
      <ProfileIconWrapper>
        <ProfileIcon />
      </ProfileIconWrapper>
      <ProfileName>Othavio Henrico</ProfileName>
      <Role>FullStack Developer</Role>
    </>
  );
}
