import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const AlertWrapper = styled.div`
  border: 1px solid ${theme.border};
  width: 50%;
  margin: 3rem auto;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const AlertIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const AlertBody = styled.div`
  padding: 15px 25px 25px 25px;
  font-size: 22px;
  font-weight: 600;
`;

export const AlertSection = styled.div`
  display: flex;
  padding: 0px 20px 20px 20px;
  border-bottom: 1px solid ${theme.border};
`;

export const AlertFooter = styled.div`
  padding: 15px 25px 20px 25px;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

export const AlertCheckbox = styled.div`
  width: 80px;
  border-radius: 4px;
  background-color: ${theme.ToggleColor};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlertBox1 = styled.div`
  border: 1px solid ${theme.border};
  padding: 6px 15px;
  border-radius: 5px;
`;

export const AlertBox2 = styled.div`
  border: 1px solid ${theme.border};
  padding: 6px 15px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const AlertHeaderIcon = styled.div``;
