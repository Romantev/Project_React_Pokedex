import { NavLink } from "react-router-dom";
import "./BtnType.css";

const BtnType = ({text, className, color}) => {
  return <>
    <NavLink className={className} to={`/:${text}`} style={color?`color: ${color};`:null}>{text}</NavLink>
  </>;
};

export default BtnType;
