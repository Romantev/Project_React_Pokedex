import "./BtnDarkMode.css";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/Context";
import { useContext } from "react";


const BtnDarkMode = () => {
  const { darkMode, SetdarkMode } = useContext(DarkModeContext);
  return <></>;
};

export default BtnDarkMode;
