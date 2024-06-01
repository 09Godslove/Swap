import Navbar from "../Navbar"
import Card from "../Card" 
import data from "../data"

export default function Home() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.Id}
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