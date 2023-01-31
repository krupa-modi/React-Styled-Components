import React, { useContext } from "react";
import { Accordion, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const DashBoard = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className={darkMode ? "sidenavdark" : "sidenavlight"}>
          {/* <div style={{ marginTop: "14px" }}></div> */}
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Design Menu</Accordion.Header>
              <Accordion.Body
                className="px-0 py-0"
                // className={darkMode ? "buttondark" : "buttonlight"}
              >
                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/header");
                  }}
                >
                  <Icon.CardHeading className="me-2" />
                  Heading
                </Button>
                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("page/colors");
                  }}
                >
                  <Icon.PencilSquare className="me-2" />
                  Color
                </Button>
                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/icons");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Icons
                </Button>
                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/shadow");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Shadow
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/button");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Button
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/cards");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Card
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/cardtabs");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  CardTab
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/action");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  ActionBlock
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/roundbutton");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  RoundButton
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/selector");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Selector
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/form");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Form
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/alert");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Alert
                </Button>

                <Button
                  // className="btn-dashboard w-100 py-3"
                  className={darkMode ? "buttondark" : "buttonlight"}
                  onClick={() => {
                    navigate("/page/login");
                  }}
                >
                  <Icon.PlusCircleFill className="me-2" />
                  Login
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
