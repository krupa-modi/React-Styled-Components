import React, { useContext, useEffect, useState } from "react";
import { Button, Accordion } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { ThemeContext } from "../../context/ThemeContext";
import themes from "../../Design/theme";

const Navigation = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // const [darkMode1, setDarkMode1] = useState(false);
  // const [themeMode, setThemeMode] = useState("light-mode");
  // const [themeData, setThemeData] = useState(themes.light);

  const themeClick = () => {
    setDarkMode(!darkMode);
  };

  // const themeClick = () => {
  //   // handlerChange();
  //   // console.log("click");
  //   if (themeMode === "dark-mode") {
  //     setThemeMode("light-mode");
  //     setThemeData(themes.light);
  //   } else {
  //     setThemeMode("dark-mode");
  //     setThemeData(themes.light);
  //   }
  // };

  // const handlerChange = () => {
  //   setDarkMode1(!darkMode1);
  // };

  // useeffect hook
  // useEffect(() => {
  //   document.body.className = themeMode;
  // });
  return (
    <>
      <div>
        <nav className={darkMode ? "TopNav" : "TopNavlight"}>
          <div className="switch-container">
            <label class="switch">
              <input type="checkbox" onClick={themeClick} />
              <span class="slider round"></span>
            </label>
            {/* <label className="switch-label">
              {darkMode1 ? "Dark" : "Light"}
            </label> */}
          </div>

          {/* <label className="themelabel">
            <input type="checkbox" />
            <span onClick={() => themeClick()} />
          </label> */}

          <ul className="lg-nav">
            <li>
              <a>Bold</a>
            </li>
            <li>
              <a>SemiBold</a>
            </li>
            <li>
              <a>Medium</a>
            </li>
            <li>
              <a>Regular</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
