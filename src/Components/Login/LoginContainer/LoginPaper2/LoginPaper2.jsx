import React, { useState } from "react";
import "./LoginPaper2.css";
import LoginTextField from "./LoginTextField/LoginTextField";
import { Fade } from "react-reveal";
import data from "../../../../Storage"
import { useNavigate } from "react-router-dom";

const LoginPaper2 = ({ handlePreviousPaper }) => {


    const navigate = useNavigate();

    const [emailID, setEmailID] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (text) => {
        setEmailID(text.target.value);
        console.log(text);
    }
    
    const handlePassword = (text) => {
        setPassword(text.target.value);
        console.log(text);
    }

    const handleSubmit = () => {

        var gotit = false;

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if(emailID === element.emailID && password === element.password){
                navigate("/home", {
                    state: {
                        by: "user",
                        id: element.name,
                        image: element.image
                    }
                });
                gotit = true;
            }
        }
        if (gotit === false) {
            alert("Please Check Credentials")
        }
    }

    return(
        <Fade right>
            <div className="LoginPaper2">
                <h2 className="LoginPaper2Header">Login As Official</h2>
            
                <LoginTextField text="Email-ID" handleChange={handleEmail}/>
                <br />
                <br />
                <LoginTextField text="Password" handleChange={handlePassword}/>
                <br />
                <div className="formSubmit">
                    <p className="BackBtn" onClick={() => handlePreviousPaper()}>Back</p>
                    <p className="BackBtn" onClick={() => handleSubmit()}>Submit</p>
                </div>
            </div>
        </Fade>
    )
}

export default LoginPaper2;