import styled from "styled-components";
import { BaseButton } from "./base-button";
import config from "../../../../configs";

const theme = config.theme;

export const LargeButton = styled(BaseButton)`
  &:hover {
    background-color: ${theme.buttonColor};
    color: ${theme.primaryColor};
  }
`;

export const LargeButton1 = styled(BaseButton)`
  max-height: 50px;
  min-height: 1em;
  max-width: 200px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  background-color: ${theme.primaryColor};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;

export const LargeButton2 = styled(BaseButton)`
  max-height: 50px;
  min-height: 1em;
  max-width: 200px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;
