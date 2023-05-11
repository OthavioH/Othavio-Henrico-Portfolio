import { WorkExperienceItem } from "../Experiences.style";

import { useState } from "react";
import WorkExperienceContent from "./WorkExperienceContent/WorkExperienceContent";
import WorkExperienceHeader from "./WorkExperienceHeader/WorkExperienceHeader";

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
      <WorkExperienceHeader
        companyName={companyName}
        companyRole={companyRole}
        workingPeriod={workingPeriod}
        isExpanded={isExpanded}
        setIsExpanded={() => setIsExpanded(!isExpanded)}
      />
      {isExpanded && (
        <WorkExperienceContent
          description={description}
          skillList={skillList}
        />
      )}
    </WorkExperienceItem>
  );
}
