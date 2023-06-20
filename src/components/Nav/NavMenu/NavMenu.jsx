import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import CheckBox from "../../CheckBox/CheckBox"
import logo from "../.././Header/pokemon.png"
import close from "./close.svg"
import "./NavMenu.css"



const NavMenu = ({open, setOpen}) => {
    const [types, setTypes] = useState([])
    const [allTypes, setAlltypes] = useState()
     
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/type')
        .then((res)=> res.json())
        .then((data)=> setAlltypes(data.results))
        .catch((err)=> console.log("Fehler", Error))
    }, [])

    return ( 
    <>
        <section className="navMenu">
            <div className="imgBox">
                <img src={logo} alt="Pokemon-Logo" />
                <img onClick={() => setOpen(false)} src={close} alt="close" />
            </div>
            <h1>Type</h1>
             <div className="checkBoxBox">
            {allTypes?.map((item, i) => <CheckBox text={item.name}  setTypes={setTypes} key={i}/>)}
            </div> 
            <SearchBar /> 
        </section>
    </>
    
    );
}
 
export default NavMenu;