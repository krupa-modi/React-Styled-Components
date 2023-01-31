import React from "react";
import styled from "styled-components";
import {
  Section,
  Rows,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  BodyLarge,
  BodyRegular,
  BodySmall,
  Caption,
  Container,
} from "../../Design/components";

const Header = () => {
  return (
    <>
      <Container style={{ height: "auto", padding: "30px" }}>
        <Heading1>Welcome To Our Header Section</Heading1>
        <Section>
          <Rows>
            <Heading1>heading 1</Heading1>
          </Rows>
          <Rows>
            <Heading2>heading 2</Heading2>
          </Rows>
          <Rows>
            <Heading3>heading 3</Heading3>
          </Rows>
          <Rows>
            <Heading4>heading 4</Heading4>
          </Rows>
          <Rows>
            <Heading5>heading 5</Heading5>
          </Rows>
          <Rows>
            <Heading6>heading 6</Heading6>
          </Rows>
          <Rows>
            <BodyLarge>Body large</BodyLarge>
          </Rows>
          <Rows>
            <BodyRegular>Body Regular</BodyRegular>
          </Rows>
          <Rows>
            <BodySmall>Body Small</BodySmall>
          </Rows>
          <Rows>
            <Caption>Caption</Caption>
          </Rows>
        </Section>
      </Container>
    </>
  );
};

export default Header;
