import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  Heading1,
  FormWrapper,
  FormHeader,
  FormBody,
  FormBodyIcon,
  BodySmall,
  FormSection,
  FormSectionInner,
  FormSectionOuter,
  FormSectionOuterBody,
  Heading6,
  FormSectionOuterFooter,
  FormFooter,
  FormFooterUpper,
  FormButton,
  FormFooterBottom,
  Container,
} from "../../Design/components";

const Forms = () => {
  return (
    <>
      <Container style={{ padding: "30px" }}>
        <Heading1>Welcome To Form Page</Heading1>
        <FormWrapper>
          <FormHeader>
            <FormBodyIcon>
              <Icon.Fan style={{ fontSize: "35px" }} />
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Calendly
              </span>
            </FormBodyIcon>
            <BodySmall
              style={{
                margin: "0 25px 0 0",
                color: "lightslategray",
                fontSize: "15px",
              }}
            >
              Not Connected
            </BodySmall>
          </FormHeader>
          <FormBody>
            <span style={{ fontSize: "12px", fontWeight: "800" }}>
              Select an Account
            </span>

            <FormSection>
              <FormSectionInner>
                <Icon.Plus style={{ fontSize: "20px", marginLeft: "10px" }} />
                <BodySmall style={{ fontSize: "12px", fontWeight: "700" }}>
                  Add a New Account
                </BodySmall>
              </FormSectionInner>

              <Icon.ChevronUp
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  color: "lightslategray",
                }}
              />
            </FormSection>
          </FormBody>

          <FormSectionOuter>
            <FormSectionOuterBody>
              <Heading6 style={{ fontWeight: "700" }}>Instruction</Heading6>
              <BodySmall style={{ fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </BodySmall>
              <FormSectionOuterFooter>
                <BodySmall style={{ fontSize: "13px", fontWeight: "600" }}>
                  Get Your Credential <Icon.ArrowRight />
                </BodySmall>
              </FormSectionOuterFooter>
            </FormSectionOuterBody>
          </FormSectionOuter>

          <FormFooter>
            {/* <span style={{ fontSize: "12px", fontWeight: "800" }}>
            Select an Account
          </span> */}
            <label style={{ fontSize: "12px", fontWeight: "800" }}>
              Api Key *
            </label>
            <FormFooterUpper>
              <input type="text" />
              <FormButton>Validate</FormButton>
            </FormFooterUpper>
          </FormFooter>

          <FormFooterBottom>
            <Icon.ArrowUpCircleFill
              style={{ fontSize: "20px", marginLeft: "10px" }}
            />
            <BodySmall style={{ marginLeft: "10px", fontSize: "14px" }}>
              Your Credential are encrypted & can be removed at any time{" "}
              <Icon.ArrowUpRight
                style={{ fontSize: "15px", marginLeft: "6px" }}
              />
            </BodySmall>
          </FormFooterBottom>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Forms;
