import {
  WorkExperienceHeaderWrapper,
  WorkExperienceInfo,
  WorkExperienceCompanyName,
  WorkExperienceCompanyRole,
  WorkExperienceCompanyDate,
  IconButton,
  ArrowDownIcon,
} from "../../Experiences.style";

interface WorkExperienceHeaderProps {
  companyName: string;
  companyRole: string;
  workingPeriod: string;
  isExpanded: boolean;
  setIsExpanded: () => void;
}

export default function WorkExperienceHeader({
  companyName,
  companyRole,
  workingPeriod,
  isExpanded,
  setIsExpanded,
}: WorkExperienceHeaderProps & {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}) {
  return (
    <WorkExperienceHeaderWrapper
      className={isExpanded ? "expanded" : "collapsed"}
    >
      <WorkExperienceInfo>
        <WorkExperienceCompanyName
          className={isExpanded ? "expanded" : "collapsed"}
        >
          {companyName}
        </WorkExperienceCompanyName>
        <WorkExperienceCompanyRole>{companyRole}</WorkExperienceCompanyRole>
        <WorkExperienceCompanyDate>{workingPeriod}</WorkExperienceCompanyDate>
      </WorkExperienceInfo>
      <IconButton onClick={setIsExpanded}>
        <ArrowDownIcon
          src="arrow_down_icon.png"
          className={isExpanded ? "expanded" : "collapsed"}
        />
      </IconButton>
    </WorkExperienceHeaderWrapper>
  );
}
