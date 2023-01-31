import styled from "styled-components";
import config from "../../../../configs";

const theme = config.theme;

export const FormWrappers = styled.div`
  border: 1px solid ${theme.border};
  width: 60%;
  margin: 3rem auto;
  padding: 23px;
  border-radius: 10px;
`;

export const FormProfile = styled.div`
  text-align: center;
  margin: 15px 0;
  font-size: 70px;
  color: slategrey;
`;

export const FormUserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form``;

export const Button = styled.button`
  width: 23%;
  padding: 10px;
  margin: 25px 0;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid #616161;
  background-color: slategrey;
  color: ${theme.primaryColor};

  &:hover {
    background-color: aquamarine;
    color: ${theme.secondaryColor};
    transition: all 0.2s;
  }
`;
