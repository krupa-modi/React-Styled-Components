import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  SelectorWrapper,
  Heading1,
  SelectorBody,
  SelectorFooter,
  BodySmall,
  SelectorIcon,
  Heading6,
  SelectorSection,
  Container,
} from "../../Design/components";

const Selector = () => {
  return (
    <>
      <Container style={{ height: "100vh", padding: "30px" }}>
        <Heading1>Welcome To Selector Page</Heading1>
        <SelectorWrapper>
          <SelectorBody>
            <BodySmall style={{ fontWeight: "700" }}>
              Variable selector
            </BodySmall>
            <SelectorIcon>
              <Icon.ArrowClockwise />
              <Icon.X style={{ marginLeft: "5px", fontSize: "30px" }} />
            </SelectorIcon>
          </SelectorBody>
          <SelectorFooter>
            <Icon.Fan style={{ fontSize: "40px" }} />
            <SelectorSection>
              <Heading6 style={{ color: "lightslategray" }}>
                Shopify Trigger
              </Heading6>
              <BodySmall style={{ fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </SelectorSection>
            <span>
              <Icon.CaretRightFill style={{ fontSize: "20px" }} />
            </span>
          </SelectorFooter>

          <SelectorFooter>
            <Icon.Fan style={{ fontSize: "40px" }} />
            <SelectorSection>
              <Heading6 style={{ color: "lightslategray" }}>
                Shopify Trigger
              </Heading6>
              <BodySmall style={{ fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </SelectorSection>
            <span>
              <Icon.CaretRightFill style={{ fontSize: "20px" }} />
            </span>
          </SelectorFooter>
        </SelectorWrapper>
      </Container>
    </>
  );
};

export default Selector;
