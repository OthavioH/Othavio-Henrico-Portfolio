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
      <StackIcon src={imgUrl} />
      <StackTitle>{title}</StackTitle>
    </StackComponent>
  );
}

const StackComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;

const StackTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-left: 4px;
`;

const StackIcon = styled.img`
  width: 30px;
  height: 30px;
`;
