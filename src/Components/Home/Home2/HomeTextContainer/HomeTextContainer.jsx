import React from "react";
import "./HomeTextContainer.css";

const HomeTextContainer = ({ Text, placeholder, handleChange }) => {
    return(
        <div className="HomeTextContainer">
            <h3 className="HomeTextContainerHeader">{Text}*</h3>
            <input className="HomeTextContainerInp" placeholder={placeholder} onChange={handleChange} alt={placeholder}/>
        </div>
    )
}

export default HomeTextContainer;