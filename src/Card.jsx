/* eslint-disable react/prop-types */
//import React from "react"
import { useNavigate } from 'react-router-dom'
import "./styles/cards.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

export default function Cards({ id, images, ...props }) {
    let navigate = useNavigate()
    function start(){
        navigate(`/View/${id}`)
    }
    let urls = images[0].images
    let link = urls[0]
    const truncateContent = (text, length)=>{
        if (text.length <= length) return text;
        return text.substring(0, length) + '.....'
    }
    return (
        <div className="col-12 col-md-6 col-lg-4" >
            <Card>
                <img  src={link}  className='card-img-top img-fluid img-fixed' />
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{truncateContent(props.description, 20)}</p>
                
                <Button className="Viewbtn" onClick={start}>View Details</Button>
            </Card>
        </div>
    );
}