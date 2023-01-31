import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Dashboard from "../components/pages/DashBoard";
import Navigation from "../components/pages/Navigation";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MainLayout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row>
          <div className="sidenav-parent">
            <Dashboard />
            <div className={darkMode ? "outletDivDark" : "outletDivLight "}>
              <Outlet />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default MainLayout;
