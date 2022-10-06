import React from 'react'; 
import Cartwidget from "./CartWidget";
import {Link} from "react-router-dom"
 

const Navbar = () => {
    return(
        <nav>
            <div id="contenedorNav">
                
                <a href="/"> <Cartwidget/> </a>
                
                <div id="mobile-menu">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
                </div>
                
                <div>
                    <ul id="nav-list">
                        <li><Link to={"/"}>Início</Link></li>
                        <li><Link to={"/characters"}>Character</Link></li>
                        <li><Link to={"/planets"}>Planets</Link></li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;