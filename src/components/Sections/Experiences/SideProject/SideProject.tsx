import { Stack } from "../../../../shared/types/Stack";
import stackToIcon from "../../../../shared/utils/stackToIcon";
import {
  SideProjectDate,
  SideProjectImage,
  SideProjectImageFilter,
  SideProjectImageWrapper,
  SideProjectStackList,
  SideProjectTitle,
  SideProjectWrapper,
  StackItem,
} from "../Experiences.style";

interface SideProjectProps {
  projectName: string;
  projectDate: string;
  thumbnailURL: string;
  websiteURL?: string;
  stacks: Stack[];
}

export default function SideProject({
  projectName,
  projectDate,
  thumbnailURL,
  websiteURL,
  stacks,
}: SideProjectProps) {
  return (
    <a href={websiteURL} style={{ textDecoration: "none" }}>
      <SideProjectWrapper>
        <SideProjectImageWrapper>
          <SideProjectImageFilter />
          <SideProjectImage src={thumbnailURL} />
        </SideProjectImageWrapper>
        <SideProjectTitle>{projectName}</SideProjectTitle>
        <SideProjectDate>{projectDate}</SideProjectDate>
        <SideProjectStackList>
          {stacks.map((stackItem, index) => (
            <StackItem key={index} src={stackToIcon(stackItem)} />
          ))}
        </SideProjectStackList>
      </SideProjectWrapper>
    </a>
  );
}
