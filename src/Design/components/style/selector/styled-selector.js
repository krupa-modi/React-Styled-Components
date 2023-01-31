import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const SelectorWrapper = styled.div`
  border: 1px solid ${theme.border};
  width: 60%;
  margin: 3rem auto 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const SelectorBody = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.border}; ;
`;

export const SelectorFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 5px;
  border-bottom: 1px solid ${theme.border};
`;

export const SelectorIcon = styled.div`
  font-size: 20px;
`;

export const SelectorSection = styled.div`
  margin-left: 10px;
`;
