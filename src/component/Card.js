import React from "react";
//  import Cardimage from "./images/katie-zaferes.png"
//  import Starimage from "./public/images/star.png"


export default function Card(props){
    return(
        <div>
            <div className="card">

                 {<img className="card-image" src={`../images/${props.img}`} alt="" />} 
               
                    <div>
                        <div className="card-stats">
                            { <img className="star-image" src="../images/star.png" alt="card-star" /> }
                            <span>{props.rating}</span>
                            <span className="grey"> ({props.reviewCount}) .</span>
                            <span className="grey">{props.location}</span>
                        </div>
                    </div>

                
                <p className="card-title">{props.title}</p>
                <p className="card-price"><strong>From ${props.price}</strong>/person</p>

            </div>
           






        </div>
    )
}