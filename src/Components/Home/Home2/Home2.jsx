    import React, { useState } from "react";
import "./Home2.css";
import HomeTextContainer from "./HomeTextContainer/HomeTextContainer";

const Home2 = () => {

    const [childFullName, setChildFullName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [childPhysicalDescription, setChildPhysicalDescription] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [placeofMissing, setPlaceofMissing] = useState("");
    const [fathername, setFathername] = useState("");
    const [motherName, setMotherName] = useState("");
    const [contactnumber1, setContactnumber1] = useState("");
    const [contactnumber2, setContactnumber2] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [additionalInfo, setadditionalInfo] = useState("");
    const [file, setFile] = useState(null);

    const handleFile = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleFullname = (e) => {
        setChildFullName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleChildPhysicalDescription = (e) => {
        setChildPhysicalDescription(e.target.value)
    }

    const handleDateofbirth = (e) => {
        setDateofbirth(e.target.value)
    }

    const handlePlaceofMissing = (e) => {
        setPlaceofMissing(e.target.value)
    }

    const handleFathername = (e) => {
        setFathername(e.target.value)
    }

    const handleMotherName = (e) => {
        setMotherName(e.target.value)
    }

    const handleContactnumber1 = (e) => {
        setContactnumber1(e.target.value)
    }

    const handleContactnumber2 = (e) => {
        setContactnumber2(e.target.value)
    }

    const handleMail = (e) => {
        setEmail(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleAdditionalInfo = (e) => {
        setadditionalInfo(e.target.value)
    }

    const sendData = () => {

        const formData = new FormData();

        formData.append("fullName", childFullName);
        formData.append("age", age);
        formData.append("gender", gender);
        formData.append("physicalDescription", childPhysicalDescription);
        formData.append("dateOfBirth", dateofbirth);
        formData.append("placeOfMissing", placeofMissing);
        formData.append("fatherName", fathername);
        formData.append("motherName", motherName);
        formData.append("contactNumber1", contactnumber1);
        formData.append("contactNumber2", contactnumber2);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("additionalInfo", additionalInfo);
        formData.append("file", file);

        console.log(formData)

        // let data = {
        //     "fullName": childFullName,
        //     "age": age,
        //     "gender": gender,
        //     "physicalDescription": childPhysicalDescription,
        //     "dateOfBirth": dateofbirth,
        //     "placeOfMissing": placeofMissing,
        //     "fatherName": fathername,
        //     "motherName": motherName,
        //     "contactNumber1": contactnumber1,
        //     "contactNumber2": contactnumber2,   
        //     "email": email,
        //     "address": address,
        //     "additionalInfo": additionalInfo,
        //     "file": file,
        // }
        // console.log(data)
        fetch("http://127.0.0.1:8050/missingchild", {
            method: "POST",
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: formData,
        })
    }

    const handleSubmit = () => {
        if (childFullName.length > 1 && age.length > 0 && gender.length > 1 && gender.length > 1 && childPhysicalDescription.length > 1 && dateofbirth.length > 1 && placeofMissing.length > 1 && fathername.length > 1 && motherName.length > 1 && contactnumber1.length > 1 && address.length > 1 && contactnumber2.length > 1 && additionalInfo.length > 1 && email.length > 1) {
            
            sendData()
            
        }else{
            alert("Fill Credentials")
        }
    }

    return(
        <div className="Home2">
            <HomeTextContainer handleChange={handleFullname} Text="Full Name" placeholder="Child Full Name"/>
            <HomeTextContainer handleChange={handleAge} Text="Age" placeholder="Child Age"/>
            <HomeTextContainer handleChange={handleGender} Text="Gender" placeholder="Child Gender"/>
            <HomeTextContainer handleChange={handleChildPhysicalDescription} Text="Physical Description" placeholder="Child Physical Description"/>
            <HomeTextContainer handleChange={handleDateofbirth} Text="D.O.B" placeholder="DD/MM/YYYY"/>
            <HomeTextContainer handleChange={handlePlaceofMissing} Text="Place Of Missing" placeholder="Child Place Of Missing"/>
            <HomeTextContainer handleChange={handleFathername} Text="Father Name" placeholder="Child's Father Name"/>
            <HomeTextContainer handleChange={handleMotherName} Text="Mother Name" placeholder="Child's Mother Name"/>
            <HomeTextContainer handleChange={handleContactnumber1} Text="Contact Number 1" placeholder="Contact Number"/>
            <HomeTextContainer handleChange={handleContactnumber2} Text="Contact Number 2" placeholder="Contact Number"/>
            <HomeTextContainer handleChange={handleAddress} Text="Address" placeholder="Address"/>
            <HomeTextContainer handleChange={handleMail} Text="Email-ID" placeholder="Email-ID"/>
            <HomeTextContainer handleChange={handleAdditionalInfo} Text="Additional Info" placeholder="Additional Info"/>
            <input className="inputFile" onChange={(e) => handleFile(e)} type='file'/>
            
            <div className="submitBtn" onClick={() => handleSubmit()}>
                <p>Submit</p>
            </div>
        </div>
    )
}

export default Home2;