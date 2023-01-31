import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const Section = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 10px;
  margin: 4rem 0px;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
`;

export const Rows = styled.div`
  border: 1px solid ${theme.border};
  min-height: 50px;
  padding: 5px;
`;

export const Heading1 = styled.h1`
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;

export const Heading2 = styled.h2`
  font-size: calc(1.325rem + 0.9vw);
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;
export const Heading3 = styled.h3`
  font-size: font-size: calc(1.3rem + .6vw);;
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;
export const Heading4 = styled.h4`
  font-size: calc(1.275rem + 0.3vw);
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;
export const Heading5 = styled.h5`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;
export const Heading6 = styled.h6`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  display: block;
`;
