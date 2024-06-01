/* eslint-disable react/prop-types */
//import React from "react"
import { useNavigate } from 'react-router-dom'
import "./styles/cards.css"


export default function Card(props) {
    let navigate = useNavigate()
    function start(){
        navigate('/View')
    }
    return (
            <div className={`card ${props.className}`} onClick={start} >
                <div className="images">
                    <img src= {`./src/assets/${props.image}`} />
                </div>
                <h3>{props.Title}</h3>
                <p>{props.Discription}</p>
                <p><b>In Exchange for:</b> {props.Exchange}</p>
            </div>  

    )
}