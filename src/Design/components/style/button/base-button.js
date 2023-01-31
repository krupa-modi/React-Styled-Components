import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const BaseButton = styled.button`
  max-height: 50px;
  min-height: 1em;
  max-width: 200px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid #0f6cbd;
  background-color: #0f6cbd;
  color: ${theme.primaryColor};
  font-weight: 500;
  border-radius: 5px;
`;

export const ButtonWrapper = styled.div`
  margin: 3rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 50px;
`;
