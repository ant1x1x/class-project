import React from "react";
import "./marque.style.css"


const Marque = ({text})=>{
    return(
        <>
        <div className="marque-container">
            <div className="bombo">
                <span>
                    {text}
                </span>
            </div>
        </div>
        </>
    )
}
export default Marque;