import { useState } from "react";
import "./Header.css";
import logo from "./pokemon.png";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
// import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

const Header = (props) => {
  const [icon, setIcon] = useState(false);

  return (
    <>
      <header className="header">
        <div className="img-wrapper">
          <img src={logo} alt="Pokemon-Logo" />
        </div>
        <div className="nav-wrapper">
          <Nav setFilterType={props.setFilterType}/>
          <SearchBar data={props.data} search={props.search} />
          {/* <BtnDarkMode /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
