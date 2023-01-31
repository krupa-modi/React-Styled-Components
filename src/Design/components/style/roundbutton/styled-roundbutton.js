import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const RoundButtonWrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(3 100px);
  grid-template-rows: repeat(3, 80px);
  grid-template-columns: repeat(3, 200px);
`;

export const RoundButtonBody = styled.div`
  display: flex;
  border: 1px solid ${theme.border};
  margin: 15px;
  border-radius: 50px;
  justify-content: space-evenly;
  align-items: center;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const RoundButtonIcon = styled.div`
  font-size: 25px;
`;

export const RoundButtonText = styled.div``;
