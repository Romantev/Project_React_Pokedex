import "./BtnDarkMode.css";
import DarkLight from "./DarkLight";

import React, { useContext } from "react";
import { DarkModeContext } from "../../context/Context";

const BtnDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const changeTheme = () => {
    setDarkMode((prev) => !prev);
  };

  console.log(darkMode);

  return (
    <>
      <button className="btn-darkmodeicon" onClick={changeTheme}>
        <DarkLight />
      </button>
    </>
  );
};

export default BtnDarkMode;
