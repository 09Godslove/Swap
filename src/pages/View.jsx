// this is the page that displays the cards seperately after clicked
//import React from "react";
import Navbar from "../NavbarOne";
import Card from '../Card'
import data from '../data'
import "../styles/View.css"

function View(){
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item}
                className = 'swapCards'
            />
        )
    })


    return(
        <>
            <Navbar />
            <>{cards[1]}</>
            <div className="swapBtn"><button className="listBtn swap" >Swap Item</button></div>
            {console.log(12)}
        </>
    )
}
export default View
