import React from "react";
import LoginTextField from "../LoginPaper2/LoginTextField/LoginTextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPaper3.css";
import { Fade } from "react-reveal";

const LoginPaper3 = ({ handlenegadouble }) => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/home", {
            state: {
                by: "guest",
                id: email,
            }
        });
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return(
        <Fade>
            <div className="LoginPaper3">
                <h1 style={{fontSize: 'large'}}>Login As A Guest</h1>

                <LoginTextField text="Email-ID" handleClick={handleChange}/>
                <br/>
                <div className="formSubmit">
                    <p className="BackBtn" onClick={() => handlenegadouble()}>Back</p>
                    <p className="BackBtn" onClick={() => handleSubmit()}>Submit</p>
                </div>
            </div>
        </Fade>
    )
}

export default LoginPaper3;