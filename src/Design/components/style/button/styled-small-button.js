import styled from "styled-components";
import { BaseButton } from "./base-button";
import config from "../../../../configs";

const theme = config.theme;

export const SmallButton = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid #0f6cbd;
  background-color: #0f6cbd;
  color: ${theme.primaryColor};
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background-color: ${theme.buttonColor};
    color: ${theme.primaryColor};
  }
`;

export const SmallButton1 = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  background-color: ${theme.primaryColor};
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;

export const SmallButton2 = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;

export const SmallButton3 = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid #0f6cbd;
  background-color: #0f6cbd;
  color: ${theme.primaryColor};
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    transition: all 0.3s;
    background-color: ${theme.buttonColor};
    color: ${theme.primaryColor};
  }
`;

export const SmallButton4 = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;

export const SmallButton5 = styled(BaseButton)`
  max-height: 45px;
  min-height: 1em;
  max-width: 140px;
  font-size: 15px;
  padding: 10px;
  transition: all 0.3s;
  border: 2px solid ${theme.border};
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  font-weight: 500;
  border-radius: 5px;
`;
