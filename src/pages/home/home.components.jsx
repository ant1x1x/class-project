// src/pages/HomePage/HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.components";
import { productData, topSellingData } from "../../data";
import "./home.styles.css";

// Import remaining images
import BottleImage from "../../assetts/images/bottle.jpg";
import ToyImage from "../../assetts/images/toy.jpg";
import ShopriteImage from "../../assetts/images/shoprittee.png";
import Bd from "../../assetts/images/bd.jpg";
import fng from "../../assetts/images/fng.jpg";
import mp from "../../assetts/images/mp.jpg";

const HomePage = () => {
    const styles = {
        backgroundImage: `url(${ShopriteImage})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
        height: '60vh',
        padding: '30px',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <>
            <Header />
            <section>
                <div style={styles}>
                    {/* <img src={ShopriteImage} alt="Shoprite" className="shope" /> */}
                </div>
                <div className="sect">
                    <img src={BottleImage} alt="Bottle" className="shoper" />
                    <img src={ToyImage} alt="Toy" className="shoper" />
                </div>
            </section>

            <div className="division">
                <div>
                    <h1 className="header1">Products</h1>
                </div>
                <div className="header2">
                    <button className="spanish2">View More</button>
                </div>
            </div>

            <div className="container">
            <div className="disr">
                    {productData.map((item) => (
                        <div key={item.id}>
                            <Link to={`/products/${item.id}`}>
                                <img src={item.src} alt={item.alt} className="imag" />
                            </Link>
                            <p className="pea">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <div className="division">
                    <div>
                        <h1 className="header1">Top Selling Products</h1>
                    </div>
                    <div className="header2">
                        <button className="spanish2">View More</button>
                    </div>
                </div>
                <div className="container">
                <div className="disr">
                        {topSellingData.map((item) => (
                            <div key={item.id}>
                                <Link to={`/top-selling/${item.id}`}>
                                    <img src={item.src} alt={item.alt} className="image" />
                                </Link>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sector">
<h1 className="head1">
            Explore Shoprite
        </h1>
    <div className="word1">

        <div className="division2">
            <img src={Bd} alt="#" className="imas"/>
            <h1 className="spanish3">Bakery & Deli</h1>
            <p className="header3">We serve delicious, fresh-baked goods and <br></br> deli sandwiches to our community for years. <br></br> We believe in using only the freshest ingredients, <br></br>and all of our bread and pastries are made…</p>
            <button className="bott">Read more</button>
            
        </div>
        <div className="division2">
          <img src={fng} className="imas" alt="#"/>
          <h1 className="spanish3">Fruits & Vegetables</h1>
          <p className="header3">Providing the freshest and highest quality <br></br>vegetables and fruits to our customers.  <br></br>Our produce is sourced from local farmers <br></br> and markets, and we make sure to inspect <br></br> each item to ensure it meets…</p>
         <button className="bott">Read more</button>
        </div>
        <div className="division2">
            <img src={mp} className="imas" alt="#"/>
            <h1 className="spanish3">Meat & Poultry</h1>
            <p className="header3">Delicious as a roast with crisp crackling,<br></br> irresistible as sticky finger-licking ribs <br></br> dripping with mouth-watering flavour, or <br></br>flash fried and served in a fragrant stir-fry, <br></br>pork really is the most versatile…</p>
             <button className="bott">Read more</button>
        </div>
    </div>  
</section>
        </>
    );
};

export default HomePage;
