import React from "react";
import "./LoginContainer.css";
import LoginPaper1 from "./LoginPaper1/LoginPaper1";
import LoginPaper2 from "./LoginPaper2/LoginPaper2";
import LoginPaper3 from "./LoginPaper3/LoginPaper3";

const LoginContainer = ({ currentInt, handleNextPaper, handlePreviousPaper, handlenegadouble, handledouble }) => {
    return(
        <div className="LoginContainer">
           {
            currentInt === 1? <LoginPaper1 handleNextPaper={handleNextPaper} handledouble={handledouble} handlenegadouble={handlenegadouble}/>: currentInt === 2?<LoginPaper2 handlePreviousPaper={handlePreviousPaper} />: currentInt === 3? <LoginPaper3 handlenegadouble={handlenegadouble} /> :<LoginPaper3 handlenegadouble={handlenegadouble} />
           } 
        </div>
    )
}


export default LoginContainer;