import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const FormWrapper = styled.div`
  border: 1px solid ${theme.border};
  margin: 3rem 0;
  // color: ${theme.textColor};
  // background-color: ${theme.lightbgColor};
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${theme.border};
`;

export const FormBody = styled.div`
  padding: 35px;
`;

export const FormBodyIcon = styled.div`
  font-size: 20px;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${theme.border};
  padding: 13px 0 0 0;
`;

export const FormSectionInner = styled.div`
  display: flex;
`;

export const FormSectionOuter = styled.div`
  padding: 10px 35px 35px 35px;
`;

export const FormSectionOuterBody = styled.div`
  background-color: ${theme.backgroundColor};
  padding: 18px;
`;

export const FormSectionOuterFooter = styled.div`
  border: 1px solid ${theme.border};
  background-color: ${theme.primaryColor};
  border-radius: 5px;
  padding: 15px 0px 0 5px;
  text-align: center;
  display: flex;
  justify-content: 12px;
  justify-content: center;
  align-items: center;
  color: ${theme.secondaryColor};
`;

export const FormFooter = styled.div`
  padding: 10px 35px 12px 35px;
`;

export const FormFooterUpper = styled.div``;

export const FormButton = styled.button`
  margin-left: 12px;
  border: unset;
  width: 13%;
  padding: 6px;
  background-color: ${theme.buttonColor};
  color: ${theme.primaryColor};
  font-size: 15px;
  border-radius: 5px;
`;

export const FormFooterBottom = styled.div`
  display: flex;
  padding: 5px 35px 20px 35px;
`;
