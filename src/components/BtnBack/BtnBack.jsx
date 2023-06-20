import { useState } from "react";
import "./BtnBack.css";
import arrow from "./arrow.png";
import { NavLink } from "react-router-dom";

const BtnBack = () => {
  return (
    <div>
      <NavLink to="/" className="btnBack">
        <img src={arrow} alt="Back Button" />
      </NavLink>
    </div>
  );
};

export default BtnBack;