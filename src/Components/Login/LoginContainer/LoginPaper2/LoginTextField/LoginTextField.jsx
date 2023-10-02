import React from "react";
import "./LoginTextField.css";

const LoginTextField = ({ text, handleChange }) => {
    return(
        <input className="LoginTextField" placeholder={text} onChange={handleChange}/>
    )
}

export default LoginTextField;