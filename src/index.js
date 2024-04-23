import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// Part 3

function Menu() {

    let pizzas = pizzaData


    return (

        <main className="menu">
            <h2>Our menu</h2>
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from. All
                    from our stone oven, all organic, all delicious.
                </p>
                <ul className="pizzas">
                    {
                        pizzas.map((pizza) => (
                            <Pizza PizzaObj={pizza} key={pizza.name} />
                        ))
                    }
                </ul>
            </>
        </main>

    )
}



function Pizza({ PizzaObj }) {
    return (
        <li className={`pizza ${PizzaObj.soldOut}?"sold-out":" "`}>
            <img src={PizzaObj.photoName} alt={PizzaObj.name} />
            <div>
                <h3>{PizzaObj.name}</h3>
                <p>{PizzaObj.ingredients}</p>
                <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.price}</span>
            </div>
        </li>
    );
}



// ORDER component
function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online.
            </p>
        </div>
    )

}

function Header() {
    //const style = {color:"red"}
    let style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}



// part 2
function Footer() {

    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {
                isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour} />
                ) : (
                    <p>We are happy to welcome you between our open hr {openHour}:00 and {closeHour}:00</p>
                )
            }
        </footer>
    )


}










const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);