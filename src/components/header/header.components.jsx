import React from "react";
import { Link } from "react-router-dom";
import Marque from "./marque.components";
import Logo from "../../assetts/images/shopree.png"
import "./header.styles.css";

const Header= ()=>{
    return(
        <>
         <div className="gay">
            <Marque text='Shoprite Deals! Offers are valid from 30th May – 9th June 2024.'/>
        {/* <marquee className="bombo">Shoprite Deals! Offers are valid from 30th May – 9th June 2024.</marquee> */}
        </div>
           <header className="heading">
        <div className="word">
            <Link>
            <img src={Logo} alt="#" className="shoprite-logo"/>
        </Link>
    </div>
        <div>
            <nav className="navigation">
            
                <ul  className="List-Navigation">
                <li className="rela-data"><Link to="/home" className="anchor-text">Home</Link></li>
                <li className="rela-data"><Link to="/products" className="anchor-text">Products</Link></li>
                <li className="rela-data"><Link to="/promotion" className="anchor-text">Promotion</Link></li>
                <li className="rela-data"><Link className="anchor-text">Explore</Link></li>
                <li className="rela-data"><Link className="anchor-text">Store location</Link></li>
                <li className="rela-data"><Link className="anchor-text nav-but">Contact</Link></li>
                 <li className="rela-date">
                    <input type="search" placeholder="Search for products..." className="placehol"/>
                <span className="spanish1">&#128269;</span>
                </li> 
            </ul>
            </nav>
        </div>
    </header>
        </>
    )
}
export default Header;
 