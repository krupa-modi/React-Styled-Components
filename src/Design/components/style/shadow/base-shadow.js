import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const ShadowWrapper = styled.div`
  margin: 3rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 50px;
  color: ${theme.textColor};
`;
