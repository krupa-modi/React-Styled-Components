import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  Heading1,
  ActionBlockWrapper,
  ActionBlockHeader,
  ActionBlockHeaderLR,
  ActionBlockBody,
  ActionBlockSearch,
  ActionBlockBodyFooter,
  ActionBlockBodyFooterC,
  BodySmall,
  ActionBlockFooter,
  ActionBlockFooterL,
  ActionBlockFooterM,
  ActionBlockFooterR,
  Heading6,
  Container,
} from "../../Design/components";

const ActionBlock = () => {
  return (
    <>
      <Container style={{ padding: "30px" }}>
        <Heading1>Welcome to Action Block Page</Heading1>
        <ActionBlockWrapper>
          <ActionBlockHeader>
            <ActionBlockHeaderLR>Action Blocks</ActionBlockHeaderLR>
            <ActionBlockHeaderLR>
              <Icon.ArrowBarLeft className="me-2" />
            </ActionBlockHeaderLR>
          </ActionBlockHeader>

          <ActionBlockBody>
            <ActionBlockSearch>
              <Icon.Search style={{ marginLeft: "10px" }} />
              <input type="search" placeholder="Search all blocks" />
            </ActionBlockSearch>
          </ActionBlockBody>

          <ActionBlockBodyFooter>
            <ActionBlockBodyFooterC>
              <BodySmall style={{ fontSize: "15px", fontWeight: "600" }}>
                Apps
                <span
                  style={{
                    marginLeft: "8px",
                    backgroundColor: "lightgray",
                    fontWeight: "700",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  63
                </span>
              </BodySmall>
            </ActionBlockBodyFooterC>
            <ActionBlockBodyFooterC>
              <BodySmall style={{ fontSize: "15px", fontWeight: "600" }}>
                Utilities
                <span
                  style={{
                    marginLeft: "8px",
                    backgroundColor: "lightgray",
                    fontWeight: "700",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  10
                </span>
              </BodySmall>
            </ActionBlockBodyFooterC>
            <ActionBlockBodyFooterC>
              <BodySmall style={{ fontSize: "15px", fontWeight: "600" }}>
                Logic
                <span
                  style={{
                    marginLeft: "8px",
                    backgroundColor: "lightgray",
                    fontWeight: "700",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  02
                </span>
              </BodySmall>
            </ActionBlockBodyFooterC>
          </ActionBlockBodyFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Shopify</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Aircall</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Airtable</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Asana</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Attentive</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>BigCommerce</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>

          <ActionBlockFooter>
            <ActionBlockFooterL>
              <Icon.Fan style={{ fontSize: "40px" }} />
            </ActionBlockFooterL>
            <ActionBlockFooterM>
              <Heading6>Clearbit</Heading6>
              <BodySmall style={{ color: "gray", fontSize: "13px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </BodySmall>
            </ActionBlockFooterM>
            <ActionBlockFooterR>
              <span>
                <Icon.ThreeDotsVertical />
              </span>
            </ActionBlockFooterR>
          </ActionBlockFooter>
        </ActionBlockWrapper>
      </Container>
    </>
  );
};

export default ActionBlock;
