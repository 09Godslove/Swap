import React from "react"
import "./styles/cards.css"

export default function Card(props) {

    
    return (
            <div className="card">
                <div className="images">
                    <img src= {`./src/assets/${props.image}`} />
                </div>
                <h3>{props.Title}</h3>
                <p>{props.Discription}</p>
                <p><b>In Exchange for:</b> {props.Exchange}</p>
            </div>  

    )
}