import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import MainLayout from "./layout/MainLayout";
import Navigation from "./components/pages/Navigation";
import Header from "./components/pages/Header";
import Icons from "./components/pages/Icons";
import Colors from "./components/pages/Colors";
import DashBoard from "./components/pages/DashBoard";
import Shadow from "./components/pages/Shadow";
import Button from "./components/pages/Button";
import Card from "./components/pages/Card";
import CardTab from "./components/pages/CardTab";
import ActionBlock from "./components/pages/ActionBlock";
import RoundButton from "./components/pages/RoundButton";
import Selector from "./components/pages/Selector";
import Forms from "./components/pages/Forms";
import AlertBox from "./components/pages/AlertBox";
import Login from "./components/pages/Login";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  // console.log(darkMode);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/page" element={<DashBoard />} />
            <Route path="/page/header" element={<Header />} />
            <Route path="/page/colors" element={<Colors />} />
            <Route path="/page/icons" element={<Icons />} />
            <Route path="/page/shadow" element={<Shadow />} />
            <Route path="/page/button" element={<Button />} />
            <Route path="/page/cards" element={<Card />} />
            <Route path="/page/cardtabs" element={<CardTab />} />
            <Route path="/page/action" element={<ActionBlock />} />
            <Route path="/page/roundbutton" element={<RoundButton />} />
            <Route path="/page/selector" element={<Selector />} />
            <Route path="/page/form" element={<Forms />} />
            <Route path="/page/alert" element={<AlertBox />} />
            <Route path="/page/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
