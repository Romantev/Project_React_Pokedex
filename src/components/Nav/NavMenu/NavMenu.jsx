import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import CheckBox from "../../CheckBox/CheckBox"
import logo from "../.././Header/pokemon.png"



const NavMenu = ({open, setOpen}) => {
    const [types, setTypes] = useState([])
     
    const testArray = ["Bug", "Dark", "Dragon", "Electro", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Plant", "Poison", "Pychic", "Rock", "Steel", "Water"]

    return ( 
    <>
        <div>
            <div>
                <img src={logo} alt="Pokemon-Logo" />
                <button onClick={() => setOpen(false)}>X</button>
            </div>
            <h1>Type</h1>
             <div>
            {testArray.map((item, i) => <CheckBox text={item}  setTypes={setTypes} key={i}/>)}
            </div> 
            <SearchBar /> 
        </div>
    </>
    
    );
}
 
export default NavMenu;