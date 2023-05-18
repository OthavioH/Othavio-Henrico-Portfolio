import styled from "styled-components";

interface SocialLinksProps {
  title: string;
  imgUrl: string;
  url: string;
}

export default function SocialLinks({ title, imgUrl, url }: SocialLinksProps) {
  return (
    <SocialLinkComponent href={url} target="_blank">
      <SocialLinkIcon src={imgUrl} />
      <SocialLinkTitle>{title}</SocialLinkTitle>
    </SocialLinkComponent>
  );
}

const SocialLinkComponent = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  text-decoration: none;
`;

const SocialLinkTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-left: 8px;
`;

const SocialLinkIcon = styled.img`
  width: 30px;
  height: 30px;
`;
