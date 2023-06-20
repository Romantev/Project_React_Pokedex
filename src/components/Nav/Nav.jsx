import { useState } from "react";
import "./Nav.css";
import NavMenu from "./NavMenu/NavMenu";
import menu from "./menu.svg"

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
  <>
    <nav>
      <img onClick={() => setOpen(true)} src={menu} alt="menu" />
      {open?<NavMenu open={open} setOpen={setOpen}/>:<><div></div></>}
    </nav>
  </> 
  );
};

export default Nav;
;
