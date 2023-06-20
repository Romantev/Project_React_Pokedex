import { useState } from "react";
import "./Header.css";
import logo from "./pokemon.png"
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import BtnSearch from "../BtnSearch/BtnSearch";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode"
import BtnBack from "../BtnBack/BtnBack";
import { useLocation } from "react-router-dom";

const Header = () => {

  const [icon, setIcon] = useState(false);  
  const location = useLocation();
  const isDetailPage = location.pathname !== "/";

  return (
    <>
    <header className="header">
      <div className="img-wrapper">
        <img src={logo} alt="Pokemon-Logo"/>
      </div>
      
      {isDetailPage ? <BtnBack /> : <Nav/>}      
      <SearchBar />
      {/* <BtnDarkMode /> */}
    </header>  
  </>
);
};

export default Header;
