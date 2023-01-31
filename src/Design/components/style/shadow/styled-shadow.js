import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const Shadow0 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: 1px solid ${theme.border};
`;

export const Shadow1 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: 1px solid ${theme.border};
`;

export const Shadow2 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid ${theme.border};
`;

export const Shadow3 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid ${theme.border};
`;

export const Shadow4 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border: 1px solid ${theme.border};
`;

export const Shadow5 = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border: 1px solid ${theme.border};
`;
