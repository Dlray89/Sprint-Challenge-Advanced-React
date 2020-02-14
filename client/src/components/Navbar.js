import React from "react";
import useDarkMode from "../hooks/uselocaleStorage";
import "./navbar.css";


const Nav = () => {
    const [dark, setDark] = useDarkMode(false)

    const toggle = e =>{
        e.preventdefault();
        setDark(!dark)
    }

    return(
        <nav className="navcontainer">
        <h2>Womans World Cup</h2>
        <a href="#">Home</a>
        <a href="#">Register</a>

        <div className="toogle-dark">
        <div onClick={toggle}
        className={dark ? 'toggle toggled' : "toggle"} /> 
         </div>
        </nav>
    )
}
export default Nav;