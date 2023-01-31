import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeader = styled.div`
  padding: 30px;
`;

export const CardBody = styled.div`
  border: 1px solid ${theme.border};
  margin: 0 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 150px;
  margin-top: 12px;
`;

export const CardTitle = styled.div``;

export const CardTitle1 = styled.div`
  padding-top: 20px;
`;

export const CardTitle2 = styled.div``;

export const CardFooter = styled.div`
  padding: 30px;
`;
