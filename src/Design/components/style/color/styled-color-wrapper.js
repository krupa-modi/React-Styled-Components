import styled from "styled-components";

export const ColorWrapper = styled.div`
  margin: 3rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 10px;
`;
