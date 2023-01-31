import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  LargeButton,
  LargeButton1,
  LargeButton2,
  RegularButton,
  RegularButton1,
  RegularButton2,
  RegularButton3,
  RegularButton4,
  RegularButton5,
  SmallButton,
  SmallButton1,
  SmallButton2,
  SmallButton3,
  SmallButton4,
  SmallButton5,
  ButtonWrapper,
  Container,
  Heading1,
} from "../../Design/components";

const Button = () => {
  return (
    <>
      <Container style={{ height: "100vh", padding: "30px" }}>
        <Heading1>Welcome To Our Button Page</Heading1>
        <ButtonWrapper>
          <LargeButton>Large Button</LargeButton>
          <LargeButton1>Large Button</LargeButton1>
          <LargeButton2>Large Button</LargeButton2>
          <RegularButton>Regular Button</RegularButton>
          <RegularButton1>Regular Button</RegularButton1>
          <RegularButton2>Regular Button</RegularButton2>
          <RegularButton3>Regular Button</RegularButton3>
          <RegularButton4>Regular Button</RegularButton4>
          <RegularButton5>Regular Button</RegularButton5>
          <SmallButton className=" b10-class common-btn">
            Small Button
          </SmallButton>
          <SmallButton1 className=" b11-class common-btn">
            Small Button
          </SmallButton1>
          <SmallButton2 className=" b12-class common-btn">
            Small Button
          </SmallButton2>
          <SmallButton3 className=" b13-class common-btn">
            <Icon.PencilSquare className="me-2" />
            Small Button
          </SmallButton3>
          <SmallButton4 className=" b14-class">
            <Icon.Trash3 className="me-2" />
            Small Button
          </SmallButton4>
          <SmallButton5 className=" b15-class">
            <Icon.Trash3 className="me-2" />
            Small Button
          </SmallButton5>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default Button;
