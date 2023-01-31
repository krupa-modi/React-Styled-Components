import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const CardTabWrapper = styled.div`
  margin: 3rem 0;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const CardTabHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const CardTabP = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 10px;
  border: 1px solid ${theme.border};
  color: black;
  font-weight: 600;
  color: ${theme.textColor};
  background-color: ${theme.lightbgColor};

  &:hover {
    border: 1px solid #286efa;
    color: #286efa;
    background-color: ${theme.border};
  }
`;

export const CardTabBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  border: 1px solid ${theme.border};
  align-items: center;

  &:hover {
    border: 1px solid ${theme.buttonColor};
    transition: all 0.2s;
  }
`;

export const CardTabBodySection = styled.div`
  padding: 1.5rem;
`;

export const CardTabRight = styled.div`
  border: 1px solid ${theme.border};
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
`;
