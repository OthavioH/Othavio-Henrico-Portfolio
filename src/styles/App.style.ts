import styled from "styled-components";

export const AppMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 56px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    align-items: center;
  }
`;

export const SectionArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;
`;

export const SectionsContainer = styled.div`
  width: 600px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SectionTitle = styled.p`
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  user-select: none;
`;
