import {
  ArrowDownIcon,
  IconButton,
  WorkExperienceCompanyDate,
  WorkExperienceCompanyName,
  WorkExperienceCompanyRole,
  WorkExperienceInfo,
  WorkExperienceItem,
} from "../Experiences.style";

import arrowDownIcon from "../../../../assets/arrow down_icon.png";

interface WorkExperienceProps {
  companyName: string;
  companyRole: string;
  workingPeriod: string;
}

export default function WorkExperience({
  companyName,
  companyRole,
  workingPeriod,
}: WorkExperienceProps) {
  return (
    <WorkExperienceItem>
      <WorkExperienceInfo>
        <WorkExperienceCompanyName>{companyName}</WorkExperienceCompanyName>
        <WorkExperienceCompanyRole>{companyRole}</WorkExperienceCompanyRole>
        <WorkExperienceCompanyDate>{workingPeriod}</WorkExperienceCompanyDate>
      </WorkExperienceInfo>
      <IconButton>
        <ArrowDownIcon src={arrowDownIcon} />
      </IconButton>
    </WorkExperienceItem>
  );
}
