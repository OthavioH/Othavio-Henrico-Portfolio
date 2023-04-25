import {
  SubtitleUnderline,
  SubtitleWrapper,
  SubtitleText,
} from "./SectionSubtitle.style";

interface SectionSubtitleProps {
  subtitle: string;

  [key: string]: any;
}

export default function SectionSubtitle({
  subtitle,
  ...props
}: SectionSubtitleProps) {
  return (
    <SubtitleWrapper>
      <SubtitleText>{subtitle}</SubtitleText>
      <SubtitleUnderline id="underline-text" />
    </SubtitleWrapper>
  );
}
