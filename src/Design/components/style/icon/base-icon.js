import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const Iconswrapper = styled.div`
  margin: 3rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 50px;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const IconDiv = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;
