import React from "react";
import {
  Heading1,
  Shadow0,
  Shadow1,
  Shadow2,
  Shadow3,
  Shadow4,
  Shadow5,
  ShadowWrapper,
  Container,
} from "../../Design/components";

const Shadow = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Heading1>Welcome To Our SHadow Page</Heading1>
      <ShadowWrapper>
        <Shadow0 className="common-s1-class"></Shadow0>
        <Shadow1 className="common-s2-class"></Shadow1>
        <Shadow2 className="common-s3-class"></Shadow2>
        <Shadow3 className="common-s4-class"></Shadow3>
        <Shadow4 className="common-s5-class"></Shadow4>
        <Shadow5 className="common-s6-class"></Shadow5>
      </ShadowWrapper>
    </Container>
  );
};

export default Shadow;
