import { useState } from "react";
import "./Header.css";
import logo from "./pokemon.png";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import BtnSearch from "../BtnSearch/BtnSearch";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode"
import BtnBack from "../BtnBack/BtnBack";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const [icon, setIcon] = useState(false);
   const location = useLocation();
  const isDetailPage = location.pathname !== "/";

  return (
    <>
      <header className="header">
        <div className="img-wrapper">
          <img src={logo} alt="Pokemon-Logo" />
        </div>
        <div className="nav-wrapper">
          {isDetailPage ? <BtnBack /> : <Nav/>} 
          <SearchBar data={props.data} search={props.search} />
          <BtnDarkMode />
        </div>
      </header>
    </>
  );
};

export default Header;
