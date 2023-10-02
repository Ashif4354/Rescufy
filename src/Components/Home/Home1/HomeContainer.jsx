import React from "react";
import "./HomeContainer.css";

const HomeContainer = ({ name }) => {
    return(
        <div className="HomeContainer">
            <div className="HomeContainerImg">
                <img src="https://content.jdmagicbox.com/comp/chennai/42/044p6001242/catalogue/detective-international-royapettah-chennai-detective-agencies-29ltlye-250.jpg" className="HomeContainerImgImg" alt="HomeContainerImg"/>
            </div>
            <div className="HomeContainerDetails">
                <div className="HomeContainerDetailsTop">   
                    <h2>{name}</h2>
                    <p>20/10/1969</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, dolores voluptas dicta nemo sequi perferendis eos neque beatae eligendi. Inventore cupiditate consequuntur sint quidem assumenda perferendis minima earum. Enim, odit! A impedit, vitae officiis placeat sint aliquam quisquam nostrum voluptatibus minus perspiciatis assumenda asperiores illum officia distinctio quis rem optio praesentium cupiditate voluptatum sunt aspernatur est quod excepturi voluptates. Facere esse quo hic, quasi voluptas quaerat exercitationem cum tempore ullam, dignissimos odit modi a ipsa quod fugit neque maxime ex obcaecati sint iure minus. Tenetur voluptates assumenda saepe officiis vitae dolore qui officia maiores excepturi, voluptatem amet ratione nobis possimus aperiam, tempore minima! Molestias pariatur, dicta qui aspernatur, neque vitae blanditiis sed deleniti reprehenderit, enim aut dolorum ducimus laudantium facilis?</p>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;