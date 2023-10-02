import React from "react";
import "./LoginBtn.css";

const LoginBtn = ({ text, handleClick }) => {

    return(
        <div className="LoginBtn">
            <button className="btn" onClick={() => handleClick()}>{text}</button>
        </div>
    )

}

export default LoginBtn;