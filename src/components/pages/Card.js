import React from "react";
import {
  Cardwrapper,
  SmallButton,
  LargeButton2,
  CardBody,
  CardFooter,
  CardHeader,
  CardSection,
  CardTitle,
  CardTitle1,
  CardTitle2,
  Heading1,
  Heading3,
  Heading6,
  Container,
} from "../../Design/components";

const Card = () => {
  return (
    <>
      <Container style={{ height: "100vh", padding: "30px" }}>
        <Heading1>Welcome To Our Card Page</Heading1>
        <Cardwrapper>
          <CardSection>
            <CardHeader>
              <CardTitle>
                <Heading3 style={{ fontWeight: "600" }}>Silver</Heading3>
              </CardTitle>
              <CardTitle1>
                <Heading6 style={{ marginBottom: "7px" }}>
                  Ideal for stores getting ready to scale their operations.
                </Heading6>
              </CardTitle1>
              <CardTitle2>
                <Heading6 style={{ color: "#636363" }}>
                  Next billing date: July 10,2021.
                </Heading6>
              </CardTitle2>
            </CardHeader>
            <CardBody>
              <Heading3>$150 </Heading3>
              <span style={{ color: "gray" }}> / Month</span>
            </CardBody>
          </CardSection>
          <hr />

          <CardFooter>
            <SmallButton>Change Plan</SmallButton>
            <LargeButton2 style={{ marginLeft: "25px" }}>
              Cancel Subscription
            </LargeButton2>
          </CardFooter>
        </Cardwrapper>
      </Container>
    </>
  );
};

export default Card;
