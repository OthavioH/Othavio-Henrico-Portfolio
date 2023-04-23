import styled from "styled-components";

export const AppMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 56px;
`;

export const SectionsContainer = styled.div`
  width: 600px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;

export const SectionTitle = styled.p`
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;
