import React from "react";

export default function Card(props){

    console.log(process.env.PUBLIC_URL+`/arivnvClone-assets/${props.thing.coverImg}}`)

    return(
        <div className="card">
            {props.thing.openSpots===0 &&  <div className="cardBadge">SOLD OUT</div>}
            <div className="cardImage" >
                <img alt="person" className="cardImage" src={process.env.PUBLIC_URL+`/arivnvClone-assets/${props.thing.coverImg}`} />
            </div>

            <div className="rating">
                <img className="star" src={process.env.PUBLIC_URL+"/arivnvClone-assets/star.png"}/>
                <p>{props.thing.stats.rating}<span className="gray">({props.thing.stats.reviewCount}) {props.thing.location}</span></p>
                </div>
            <p>{props.thing.title}</p>
            <p><span className="bold">From ${props.thing.price}</span> / person</p>
            

        </div>
    )
}