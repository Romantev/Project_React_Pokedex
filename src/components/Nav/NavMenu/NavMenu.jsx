import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import CheckBox from "../../CheckBox/CheckBox"
import logo from "../.././Header/pokemon.png"



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
        <div>
            <div>
                <img src={logo} alt="Pokemon-Logo" />
                <button onClick={() => setOpen(false)}>X</button>
            </div>
            <h1>Type</h1>
             <div>
            {allTypes?.map((item, i) => <CheckBox text={item.name}  setTypes={setTypes} key={i}/>)}
            </div> 
            <SearchBar /> 
        </div>
    </>
    
    );
}
 
export default NavMenu;