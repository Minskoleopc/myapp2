import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// npx create-react-app my-app
// cd my-app
// npm start

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




console.log('day2')

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


    const pizzas =  pizzaData;
    const numPizza = pizzas.length

    return (
        // actual component  : list rendering
        <main className="menu">
            <ul>    
                {
                  pizzas.map((pizza)=>(
                    <Pizza pizzaObj = {pizza}/>
                  ))  
                }
            </ul>
        </main>

        // <div>
        //     {/* <Pizza name = "Pizza Prosciutto" ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese" price = "18" /> */}
        //     {/* <Pizza />
        //     <Pizza />
        //     <Pizza /> */}
        // </div>
    )
}
// part 1  
// Defining a component 
// Data (states and props) Logic Appearance 
function Pizza(props) {
    return (
       <li>
            <h1>{props.pizzaObj.name}</h1>
            <p>{props.pizzaObj.ingredients}</p>
            <p>{props.pizzaObj.price}</p>
            <p>{props.pizzaObj.soldOut}</p>
            <img src={props.pizzaObj.photoName}></img>
       </li>
    );
}

// part 2
function Footer() {
    // how it works behind the scence - 'JSX'
    // return React.createElement("footer",null,"burger bar 2019-2020")
    // how to include javascript in jsx
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)


    function Order({closeHour,openHour}){
        return (
            <div className="order">
                <p>
                    We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online.
                </p>
            </div>
        )

    }

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


function Header() {
    //const style = {color:"red"}
    let style = {}
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co</h1>
        </header>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);