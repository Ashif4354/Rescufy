import React, { Fragment, useRef, useState } from 'react';
// import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import "./Home4TakePic.css";

const Home4TakePic = () => {
  const cam = useRef(null);

  const [dataReceived, setDataRecieved] = useState({});

  function capture(imgSrc) {

      try {
        const formData = new FormData();
  
        formData.append("image", imgSrc);
        formData.append("capture", true);
  
        fetch("http://127.0.0.1:8050/checkchild", {
          method: "POST",
          // headers: {
          //     "Content-Type": "multipart/form-data"
          // },
          body: formData,
        }).then((response) => response.json())
        .then(response => {

          setDataRecieved(response);
          alert(`Name: ${response.name}, Address: ${response.address}, Phone Number 1: ${response.ph1}, Phone Number 2: ${response.ph2}`)
        })
      } catch (error) {
        console.log(error + "ERROR FOUND");
      }
  }

  const handleClick = (img) => {
    cam.current.capture(img);
    if(dataReceived === ''){
      // do nothing
    }
  }

  return (
    <Fragment>
      <Camera
        showFocus={false}
        front={false}
        capture={capture}
        ref={cam}
        width="500vw"
        height="500vh"
        focusWidth="70%"
        focusHeight="70%"
        btnColor="blue"
      />
      <br />
      <div style={{width: '100%', textAlign: 'center'}}> 
        <button style={{ zIndex: '100', position: 'absolute', textAlign: 'center', width: "max-content", margin: '0px auto', padding: '9px 16px'}} onClick={(img) => handleClick(img)}>Capture image</button>
      </div>
    </Fragment>
  );
};

export default Home4TakePic;