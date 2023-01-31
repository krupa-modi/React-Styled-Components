import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  Heading1,
  AlertWrapper,
  AlertIcon,
  AlertBody,
  BodySmall,
  AlertSection,
  AlertFooter,
  AlertCheckbox,
  AlertBox1,
  AlertBox2,
  AlertHeaderIcon,
  Container,
} from "../../Design/components";

const AlertBox = () => {
  return (
    <>
      <Container style={{ height: "100vh", padding: "30px" }}>
        <Heading1>Welcome To Alert Page</Heading1>
        <AlertWrapper>
          <AlertIcon>
            <AlertHeaderIcon>
              <Icon.Fan style={{ marginLeft: "10px", fontSize: "35px" }} />
              <Icon.Fan style={{ marginLeft: "10px", fontSize: "35px" }} />
              <Icon.Fan style={{ marginLeft: "10px", fontSize: "35px" }} />
            </AlertHeaderIcon>
            <Icon.ChevronDown
              style={{ marginLeft: "14px", fontSize: "30px" }}
            />
          </AlertIcon>

          <AlertBody>
            <BodySmall>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </BodySmall>
          </AlertBody>

          <AlertSection>
            <AlertBox1>
              <Icon.Sliders2 />
              <span style={{ marginLeft: "5px" }}>267</span>
            </AlertBox1>
            <AlertBox2>
              <span>Auto</span>
            </AlertBox2>
          </AlertSection>

          <AlertFooter>
            <BodySmall style={{ color: "lightslategray", fontSize: "15px" }}>
              Updated 3 days ago
            </BodySmall>

            <AlertCheckbox>
              <input type="checkbox" />
              <span
                style={{
                  marginRight: "10px",
                  backgroundColor: "unset",
                  color: "white",
                }}
              >
                On
              </span>
            </AlertCheckbox>
          </AlertFooter>
        </AlertWrapper>
      </Container>
    </>
  );
};

export default AlertBox;
