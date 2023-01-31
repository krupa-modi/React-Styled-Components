import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const ActionBlockWrapper = styled.div`
  border: 1px solid ${theme.border};
  width: 60%;
  margin: 3rem auto;
  padding: 23px;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const ActionBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const ActionBlockHeaderLR = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const ActionBlockBody = styled.div`
  margin: 10px 5px;
`;

export const ActionBlockSearch = styled.div`
  border: 1px solid ${theme.border};
  padding: 5px;
  border-radius: 3px;
`;

export const ActionBlockBodyFooter = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${theme.border};
`;

export const ActionBlockBodyFooterC = styled.div`
  margin: 0px 15px;
  font-weight: 600;

  &:hover {
    color: ${theme.buttonColor};
  }
`;

export const ActionBlockFooter = styled.div`
  border: 1px solid ${theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  margin-bottom: 25px;
`;

export const ActionBlockFooterL = styled.div`
  border: 1px solid ${theme.border};
  display: flex;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const ActionBlockFooterM = styled.div`
  width: 65%;
`;

export const ActionBlockFooterR = styled.div`
  font-size: 20px;
  display: flex;
`;
