import "./BtnType.css";
import { NavLink } from "react-router-dom";

const BtnType = ({ type, className }) => {
  return (
    <>
      <NavLink className={className} to={`/:${type}`}>
        {type}
      </NavLink>
    </>
  );
};

export default BtnType;
