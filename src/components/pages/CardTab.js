import React from "react";
import {
  Heading1,
  CardTabWrapper,
  CardTabHeader,
  CardTabBody,
  CardTabP,
  CardTabBodySection,
  CardTabRight,
  Heading3,
  BodySmall,
  Container,
} from "../../Design/components";

const CardTab = () => {
  return (
    <>
      <Container style={{ padding: "30px" }}>
        <Heading1>Welcome To Our Card Tab Page</Heading1>
        <CardTabWrapper>
          <CardTabHeader>
            <CardTabP>Monthly</CardTabP>
            <CardTabP>Annnual</CardTabP>
          </CardTabHeader>
          <CardTabBody>
            <CardTabBodySection>
              <Heading3 style={{ fontWeight: "600" }}>Free</Heading3>
              <BodySmall style={{ marginBottom: "7px", fontSize: "15px" }}>
                Ideal for merchants trying out automation for the first line.
              </BodySmall>
              <BodySmall style={{ color: "#636363", fontSize: "15px" }}>
                What is included?
              </BodySmall>
            </CardTabBodySection>

            <CardTabRight>
              <Heading3>Free</Heading3>
            </CardTabRight>
          </CardTabBody>
          <CardTabBody>
            <CardTabBodySection>
              <Heading3 style={{ fontWeight: "600" }}>
                Starter
                <span
                  style={{
                    fontSize: "12px",
                    backgroundColor: "lightgrey",
                    padding: "5px",
                    color: "#286EFA",
                    marginLeft: "5px",
                  }}
                >
                  Recommended
                </span>
              </Heading3>
              <BodySmall style={{ marginBottom: "7px", fontSize: "15px" }}>
                Ideal for stores getting ready to scale their operations.
              </BodySmall>
              <BodySmall style={{ color: "#636363", fontSize: "15px" }}>
                What is included?
              </BodySmall>
            </CardTabBodySection>

            <CardTabRight>
              <Heading3>$50</Heading3>
              <span style={{ color: "gray" }}> / Month</span>
            </CardTabRight>
          </CardTabBody>
          <CardTabBody>
            <CardTabBodySection>
              <Heading3 style={{ fontWeight: "600" }}>Silver</Heading3>
              <BodySmall style={{ marginBottom: "7px", fontSize: "15px" }}>
                Ideal for lean stores with hundreds of orders a month.
              </BodySmall>
              <BodySmall style={{ color: "#636363", fontSize: "15px" }}>
                What is included?
              </BodySmall>
            </CardTabBodySection>

            <CardTabRight>
              <Heading3>$150</Heading3>
              <span style={{ color: "gray", fontSize: "15px" }}> / Month</span>
            </CardTabRight>
          </CardTabBody>
        </CardTabWrapper>
      </Container>
    </>
  );
};

export default CardTab;
