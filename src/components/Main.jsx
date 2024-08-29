import Card from "./Card";
import data from "./data.js";

const Main = () => {
    const cards = data.map((card) => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        )
    })

    return (
        <section className="main--section">
            {cards}
        </section>
    );
}

export default Main;