import "./BtnDarkMode.css";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/Context";


const BtnDarkMode = () => {
  const { darkMode, SetdarkMode } = useContext(DarkModeContext);
  return <></>;
};

export default BtnDarkMode;
