import React,{ useEffect, useState } from "react";
import "./Home3.css";
import Home3Container from "./Home3Container/Home3Container";


const Home3 = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const [childrenData, setChildrenData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8050/viewcases").then((response) => response.json()).then((response) => setChildrenData(response.Cases));
    }, [])

    console.log(childrenData);


    const filteredChildrenData = childrenData
  ? childrenData.filter((item) =>
      item.child_full_name
        ? item.child_full_name.toLowerCase().includes(searchInput.toLowerCase())
        : false
    )
  : [];

    return(
        <div className="Home3">
                <input className="Home3ContainerInput" placeholder="Search Name" type='text' onChange={handleChange} value={searchInput}/>
            {
                filteredChildrenData? filteredChildrenData.map((item, key) => {
                    return(
                        <Home3Container name={item.child_full_name}  age={item.age} additionalInfo={item.additional_info} Contact1={item.contact_number_1} Contact2={item.contact_number_2} DOB={item.date_of_birth} address={item.address} emailID={item.email} fathersName={item.father_name} MothersName={item.mother_name} physicalDescription={item.physical_description} image={item.image} placeOfMissing={item.place_of_missing} gender={item.gender} status={item.status}  />
                    )
                }): <div></div>
            }
        </div>
    )
}

export default Home3;