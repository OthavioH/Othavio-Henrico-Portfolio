import styled from "styled-components";

interface SideStackComponentProps {
  title: string;
  imgUrl: string;
}

export default function SideStackComponent({
  title,
  imgUrl,
}: SideStackComponentProps) {
  return (
    <StackComponent>
      <img src={imgUrl} width={26} height={26} />
      <StackTitle>{title}</StackTitle>
    </StackComponent>
  );
}

const StackComponent = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 26px auto;
  align-items: center;
  justify-content: center;
  gap: 4px;
  aspect-ratio: 1/1;
`;

const StackTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
