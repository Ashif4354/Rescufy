import React from "react";
import LoginBtn from "./LoginBtn/LoginBtn.jsx";
import "./LoginPaper1.css";
import { Fade } from "react-reveal";

const LoginPaper1 = ({ handleNextPaper, handledouble }) => {
    return(
        <Fade>
            <div className="LoginPaper1">
                <h1 className="LoginPaper1Header">Admin Login</h1>

                <br />
                <LoginBtn text="Login As official" handleClick={handleNextPaper}/>
                <br />
                <LoginBtn text="Login As Guest" handleClick={handledouble}/>
                <br />
                {/* <div className="RegisterBTN">
                    <h3 className="RegisterBTNHeader">Register(for Official)</h3>
                </div> */}
            </div>
        </Fade>
    )
}

export default LoginPaper1;