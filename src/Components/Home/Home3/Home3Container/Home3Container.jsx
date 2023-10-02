import React, { useState } from "react";
import "./Home3Container.css";
import Dialog from '@mui/material/Dialog';

const Home3Container = ({ name, age, gender, image, physicalDescription, DOB, placeOfMissing, fathersName, MothersName, Contact1, Contact2, emailID, address, additionalInfo, status }) => {

    const [showDialog, setShowDialog] = useState(false);

    const handleDialog = () => {
        setShowDialog(true);
    }

    const handleDialogClose = () => {
        setShowDialog(false);
    }

    return(
        <>
        <Dialog maxWidth="100%" onClose={handleDialogClose} open={showDialog}>
            <h1 className="DialogHeader">Details</h1>
            <div className="DialogContainer">
                <div className="DialogContainerImg">
                    <img src={image} className="DialogContainerImgImg" alt="DialogContainerImg" />
                </div>
                <div className="DialogContainerDetailds">
                    <p className="dialogPara"><span className="BoldIT">Name: </span>{name}</p>
                    <p className="dialogPara"><span className="BoldIT">Age: </span>{age}</p>
                    <p className="dialogPara"><span className="BoldIT">Gender: </span>{gender}</p>
                    <p className="dialogPara"><span className="BoldIT">Physical Description: </span>{physicalDescription}</p>
                    <p className="dialogPara"><span className="BoldIT">D.O.B: </span>{DOB}</p>
                    <p className="dialogPara"><span className="BoldIT">Place Of Missing: </span>{placeOfMissing}</p>
                    <p className="dialogPara"><span className="BoldIT">Father Name: </span>{fathersName}</p>
                    <p className="dialogPara"><span className="BoldIT">Mother Name: </span>{MothersName}</p>
                    <p className="dialogPara"><span className="BoldIT">Contact Number 1: </span>{Contact1}</p>
                    <p className="dialogPara"><span className="BoldIT">Contact Number 2: </span>{Contact2}</p>
                    <p className="dialogPara"><span className="BoldIT">Email-ID: </span>{emailID}</p>
                    <p className="dialogPara"><span className="BoldIT">Address: </span>{address}</p>
                    <p className="dialogPara"><span className="BoldIT">Additional Info: </span>{additionalInfo}</p>
                    <p className="dialogPara"><span className="BoldIT">Status: </span><span className="">{status}</span></p>
                </div>
            </div>
        </Dialog>
        <div className="Home3Container">
            <div className="Home3ContainerImg"><img alt="child" className="Home3ContainerImgImg" src={image}/></div>
            <div className="Home3ContainerFonts">
                <p><span className="BoldIT">Name: </span>{name}</p>
                <p><span className="BoldIT">Age: </span>{age}</p>
                <p className="physicalDescription"><span className="BoldIT">Physical Description: </span>{physicalDescription}</p>
                <p className="viewmoreLink" onClick={() => handleDialog()}>View More</p>
            </div>
            <div className="Home3ContainerStatus">
                <p><span className="BoldITStatus">Status</span></p>
                <p className="StatusBar">{status}</p>
            </div>
        </div>
        </>
    )
}

export default Home3Container;