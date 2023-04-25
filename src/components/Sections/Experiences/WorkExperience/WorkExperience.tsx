import {
  ArrowDownIcon,
  IconButton,
  WorkExperienceCompanyDate,
  WorkExperienceCompanyName,
  WorkExperienceCompanyRole,
  WorkExperienceInfo,
  WorkExperienceHeader,
  WorkExperienceItem,
} from "../Experiences.style";

import arrowDownIcon from "../../../../assets/arrow down_icon.png";
import { useState } from "react";
import WorkExperienceContent from "./WorkExperienceContent/WorkExperienceContent";

interface WorkExperienceProps {
  companyName: string;
  companyRole: string;
  workingPeriod: string;
  description: string;
  skillList: string[];
}

export default function WorkExperience({
  companyName,
  companyRole,
  workingPeriod,
  description,
  skillList,
}: WorkExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <WorkExperienceItem className={isExpanded ? "expanded" : "collapsed"}>
      <WorkExperienceHeader className={isExpanded ? "expanded" : "collapsed"}>
        <WorkExperienceInfo>
          <WorkExperienceCompanyName>{companyName}</WorkExperienceCompanyName>
          <WorkExperienceCompanyRole>{companyRole}</WorkExperienceCompanyRole>
          <WorkExperienceCompanyDate>{workingPeriod}</WorkExperienceCompanyDate>
        </WorkExperienceInfo>
        <IconButton
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <ArrowDownIcon
            src={arrowDownIcon}
            className={isExpanded ? "expanded" : "collapsed"}
          />
        </IconButton>
      </WorkExperienceHeader>
      {isExpanded && (
        <WorkExperienceContent
          description={description}
          skillList={skillList}
        />
      )}
    </WorkExperienceItem>
  );
}
