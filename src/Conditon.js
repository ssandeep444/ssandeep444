import { useState } from "react";
import './condi.css'

export default function Conditon() {
    const [highlighted, setHighlighted] = useState(false);

    function handle(){
        setHighlighted(isHighlighted => !isHighlighted);
    }
    

    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button  onClick={handle} >Toggle style</button>
        </div>
    );



}