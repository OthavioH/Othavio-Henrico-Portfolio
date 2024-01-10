import { useState } from "react";
import styled from "styled-components";

interface SocialLinksProps {
  title: string;
  imgUrl: string;
  hoverImgUrl: string;
  url: string;
}

export default function SocialLinks({
  title,
  imgUrl,
  hoverImgUrl,
  url,
}: SocialLinksProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SocialLinkComponent
      href={url}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverImgUrl : imgUrl} width={26} height={26} />
      <SocialLinkTitle>{title}</SocialLinkTitle>
    </SocialLinkComponent>
  );
}

const SocialLinkTitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
`;

const SocialLinkComponent = styled.a`
  width: fit-content;
  aspect-ratio: 1 / auto;
  display: grid;
  grid-template-columns: 26px auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  text-decoration: none;
  gap: 4px;

  cursor: pointer;

  &:hover ${SocialLinkTitle} {
    color: #89f96d99;
  }
`;
