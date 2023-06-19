import { useState } from "react";
import "./Nav.css";
import NavMenu from "./NavMenu/NavMenu";

const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
  <>
    <nav>
      <p onClick={() => setOpen(true)}>Hallo ich bin eine nav</p>
      {open?<NavMenu open={open} setOpen={setOpen}/>:<><div></div></>}
    </nav>
  </> 
  );
};

export default Nav;
;
