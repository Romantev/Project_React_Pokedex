import { useEffect, useState } from 'react';
import './CheckBox.css'

const CheckBox = ({text, setFilterType, backgroundColor}) => {
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        check?setFilterType((prev)=>[...prev, text]):setFilterType((prev)=> {prev.splice(prev.indexOf(text), 1); return prev})
    },[check])

    return ( 
        <>
            <div onClick={() => {setCheck((prev) => !prev)}} className={check?"checkBox checked":"checkBox"} style={backgroundColor?`background-color: ${backgroundColor}`:null}>
                {text}
            </div>
        </>
     );
}
 
export default CheckBox;