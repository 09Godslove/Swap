import Navbar from "../Navbar"
import Card from "../Card" 
import data from "../data"

export default function Home() {
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