import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Experiences from "./components/Sections/Experiences/Experiences";
import SideProfileInfo from "./components/SideBar/SideProfileInfo/SideProfileInfo";
import { AppMain, SectionsContainer } from "./styles/App.style";

export default function App() {
  return (
    <AppMain>
      <SideProfileInfo />
      <SectionsContainer>
        <AboutMe />
        <Experiences />
      </SectionsContainer>
    </AppMain>
  );
}
