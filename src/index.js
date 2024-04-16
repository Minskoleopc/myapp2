import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";

// npx create-react-app my-app
// cd my-app
// npm start

console.log('day2')

function App() {
    return (
        <div>
            <Header />
            <Menu/>
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
    return <footer>{new Date().toLocaleString()}BurgerBbar 2019-2020</footer>
}


function Header() {
    return <h1>Welcome to the pizza club</h1>
}






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);