import styled from "styled-components";

interface SocialLinksProps {
  title: string;
  imgUrl: string;
  url: string;
}

export default function SocialLinks({ title, imgUrl, url }: SocialLinksProps) {
  return (
    <SocialLinkComponent href={url} target="_blank">
      <img src={imgUrl} width={30} height={30} />
      <SocialLinkTitle>{title}</SocialLinkTitle>
    </SocialLinkComponent>
  );
}

const SocialLinkComponent = styled.a`
  width: fit-content;
  aspect-ratio: 1 / auto;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  gap: 4px;
`;

const SocialLinkTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
