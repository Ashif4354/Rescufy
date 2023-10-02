import React, { useState } from "react";
import "./Login.css";
import LoginContainer from "./LoginContainer/LoginContainer";

const Login = () => {

    const [currentInt, setCurrentInt] = useState(1);

    const handlePreviousPaper = () => {
        setCurrentInt(currentInt-1);
    }

    const handleNextPaper = () => {
        setCurrentInt(currentInt+1);
    }

    const handledouble = () => {
        setCurrentInt(currentInt + 2);
    }

    const handlenegadouble = () => {
        setCurrentInt(currentInt - 2);
    }

    return(
        <div className="Login">
            <h1 className="LoginHeader">Rescufy</h1>
            <LoginContainer currentInt={currentInt} handledouble={handledouble} handlenegadouble={handlenegadouble} handlePreviousPaper={handlePreviousPaper} handleNextPaper={handleNextPaper}/>
        </div>
    )
}

export default Login;