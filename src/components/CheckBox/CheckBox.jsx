import { useEffect, useState } from 'react';
import './CheckBox.css'

const CheckBox = ({text, setTypes}) => {
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        check?setTypes((prev)=>[...prev, text]):setTypes((prev)=> {prev.splice(prev.indexOf(text), 1); return prev})
    },[check])

    return ( 
        <>
            <div onClick={() => {setCheck((prev) => !prev)}} className={check?"checkBox checked":"checkBox"}>
                {text}
            </div>
        </>
     );
}
 
export default CheckBox;