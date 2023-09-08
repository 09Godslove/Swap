import React from "react"
import Navbar from "./Navbar"
//import Hero from "./components/Hero"
import Card from "./Card" 
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })  
    return (
        <div>
            <Navbar />
            <section className="Cards-list">
                {cards}
            </section>

        </div>
    )
}