import { useState } from "react";
import "./Header.css";
import logo from "./pokemon.png"
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import BtnSearch from "../BtnSearch/BtnSearch";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode"

const Header = ({setFilterType}) => {

  const [icon, setIcon] = useState(false);

  return (
    <>
    <header className="header">
      <div className="img-wrapper">
        <img src={logo} alt="Pokemon-Logo"/>
      </div>
      <Nav setFilterType={setFilterType}/>
      <SearchBar />
      {/* <BtnDarkMode /> */}
    </header>  
  </>
);
};

export default Header;
