import { Stack } from "../../../../shared/models/Stack";
import stackToIcon from "../../../../shared/utils/stackToIcon";
import {
  SideProjectDate,
  SideProjectImage,
  SideProjectStackList,
  SideProjectTitle,
  SideProjectWrapper,
  StackItem,
} from "../Experiences.style";

interface SideProjectProps {
  projectName: string;
  projectDate: string;
  thumbnailURL: string;
  stacks: Stack[];
}

export default function SideProject({
  projectName,
  projectDate,
  thumbnailURL,
  stacks,
}: SideProjectProps) {
  return (
    <SideProjectWrapper>
      <SideProjectImage src={thumbnailURL} />
      <SideProjectTitle>{projectName}</SideProjectTitle>
      <SideProjectDate>{projectDate}</SideProjectDate>
      <SideProjectStackList>
        {stacks.map((stackItem, index) => (
          <StackItem key={index} src={stackToIcon(stackItem)} />
        ))}
      </SideProjectStackList>
    </SideProjectWrapper>
  );
}
