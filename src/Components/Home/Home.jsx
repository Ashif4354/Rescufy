import React, {useState} from "react";
import "./Home.css";
import Home2 from "./Home2/Home2";
import HomeContainer from "./Home1/HomeContainer";
import Home3 from "./Home3/Home3";
import Home4 from "./Home4/Home4";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [currentPage, setCurrentPage] = useState("Home");
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleChange = (text) => {
        setCurrentPage(text)
    }

    // console.log(loca)

    return(
        <div className="Home">
            <h2 className="HomeHeader">Rescufy</h2>
            <br/>
            <div className="HomeContainer">
                <div className="HomeLeftContainer">
                    {
                        location.state.by === "guest"? <>
                         <p className={currentPage === "Check Child"? "HomeLeftContainerselected": ""} onClick={() => handleChange("Check Child")}>Check Child</p>
                        </>: <>
                            <p className={currentPage === "Home"? "HomeLeftContainerselected": ""} onClick={() => handleChange("Home")}>Home</p>
                            <p className={currentPage === "Register"? "HomeLeftContainerselected": ""} onClick={() => handleChange("Register")}>Register</p>
                            <p className={currentPage === "View Cases"? "HomeLeftContainerselected": ""} onClick={() => handleChange("View Cases")}>View Cases</p>
                            <p className={currentPage === "Check Child"? "HomeLeftContainerselected": ""} onClick={() => handleChange("Check Child")}>Check Child</p>
                            <p className={currentPage === "Logout"? "HomeLeftContainerselected": ""} onClick={() => navigate("/")}>Logout</p>
                        </>
                    }
                </div>
                <div className="HomeRightContainer">
                    {
                        location.by === "guest"? <Home4 />:
                    currentPage === "Home"? <HomeContainer name={location.state.id}/>: currentPage === "Register"? <Home2 />: currentPage === "View Cases"? <Home3 />: currentPage === "Check Child"? <Home4/>: <div></div>
                    }
                </div>
            </div>  
        </div>
    )
}

export default Home;