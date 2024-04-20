import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// npx create-react-app my-app
// cd my-app
// npm start

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
    return (
        <div>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    )
}


// part 1  
// Defining a component 
// Data (states and props) Logic Appearance 
function Pizza() {
    return (
        <div>
            <img src="pizzas/funghi.jpg" alt="funghi-pizza" />
            <h2>Pizza funghi</h2>
            <p>Tomato Spinach and cheese</p>
        </div>
    );
}

// part 2
function Footer() {
    // how it works behind the scence - 'JSX'
    // return React.createElement("footer",null,"burger bar 2019-2020")
    // how to include javascript in jsx
    const hour = new Date().getHours()+5
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
                    <p>We are happy to welcome you between our open hr{openHour}:00 and {closeHour}:00</p>
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