import React, { useState, useEffect } from "react";
import "./Home4Select.css";
import { useNavigate } from "react-router-dom";
import lottie from 'lottie-web';

const Home4Select = () => {

    const navigate = useNavigate();
    const [dataReceived, setDataRecieved] = useState(null);
    const [file, setFile] = useState();

    const handleFile = (e) => {
        const formData = new FormData();

        formData.append("image", e.target.files[0]);
        formData.append("capture", false);

        fetch("http://127.0.0.1:8050/checkchild", {
            method: "POST",
            // headers: {
                //     "Content-Type": "multipart/form-data"
                // },
                body: formData,
            }).then((response) => response.json())
            .then((data) => setDataRecieved(data))
            .then(console.log(dataReceived))
            // .then(response => alert(`Name: ${response.name}, Address: ${response.address}, Phone Number 1: ${response.ph1}, Phone Number 2: ${response.ph2}`))
    }

    const handleTakePic = () => {
        navigate("/takepic");
    }

    useEffect(() => {
        // Replace 'animationData.json' with the path to your Lottie JSON file
        lottie.loadAnimation({
          container: document.getElementById('lottie-container'),
          renderer: 'svg', // You can use 'svg', 'canvas', or 'html' as the renderer
          loop: true, // Set to true if you want the animation to loop
          autoplay: true, // Set to true if you want the animation to start automatically
          animationData: require('../animation_ln5cynga.json'), // Import your Lottie JSON file
        });
      }, []);           

    return(
        <div className="Home4Select">
            <h2 className="Home4SelectHeader">Select Method</h2>
            <br />
            <br />
            <div className="Home4SelectChoose">
                <input className="Home4SelectChooseInfo" type='file' onChange={(e) => handleFile(e)} />
                <br />
                <p className="Home4SelectChooseInfo" onClick={() => handleTakePic()}>Take Picture</p>
            </div>
        </div>
    )
}

export default Home4Select;