import React from "react";
import useDarkMode from "../hooks/uselocaleStorage";


const Nav = () => {
    const [dark, setDark] = useDarkMode(false)

    const toggle = e =>{
        e.preventdefault();
        setDark(!dark)
    }

    return(
        <nav className="navcontaier">
        <h2>Womans World Cup</h2>
        <div className="toogle-dark">
        <div onClick={toggle}
        className={dark ? 'toggle toggled' : "toggle"} /> 
         </div>
        </nav>
    )
}
export default Nav;