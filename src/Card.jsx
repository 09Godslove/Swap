/* eslint-disable react/prop-types */
//import React from "react"
import { useNavigate } from 'react-router-dom'
import "./styles/cards.css"


export default function Card({ id, images, ...props }) {
    let navigate = useNavigate()
    function start(){
        navigate(`/View/${id}`)
    }
    let urls = images[0].images
    let link = urls[0]
    return (
        <div className="card" >
            <div className="card-content">
                <div className='images'><img  src={link}  /></div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className='View'>
                    <btn className="Viewbtn" onClick={start} >View Details</btn>
                </div>
            </div>
        </div>
    );
}