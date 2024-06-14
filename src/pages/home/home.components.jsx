import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.components";
import BottleImage from "../../assetts/images/bottle.jpg";
import Fruir from "../../assetts/images/fruir.webp";
import Meat from "../../assetts/images/meat.webp";
import Chick from "../../assetts/images/chick.webp";
import Rice from "../../assetts/images/rice.jpg";
import Wine from "../../assetts/images/wine.jpg";
import Drinks  from "../../assetts/images/drinks.jpg";
import Bakery from "../../assetts/images/bakery.jpg";
import Donut from "../../assetts/images/donut.jpg";
import Coffee from "../../assetts/images/coffee.jpg";
import Toy from "../../assetts/images/toy.jpg";
import Care from "../../assetts/images/care.jpg";
import Clean  from "../../assetts/images/cleaning.jpg";
import Man  from "../../assetts/images/1.webp";
import Tan1  from "../../assetts/images/2.webp";
import Ban2  from "../../assetts/images/3.webp";
import Van3  from "../../assetts/images/4.webp";
import Can4  from "../../assetts/images/5.webp";
import Aan5  from "../../assetts/images/6.webp";
import Yan6  from "../../assetts/images/7.jpg";
import Man7  from "../../assetts/images/8.webp";
import Man8  from "../../assetts/images/9.jpg";
import Man9  from "../../assetts/images/10.jpg";
import Man10  from "../../assetts/images/11.jpg";
import Man11  from "../../assetts/images/12.webp";
import Man12  from "../../assetts/images/13.jpg";
import Man13  from "../../assetts/images/14.jpg";
import Man14 from "../../assetts/images/15.webp";
import Man15  from "../../assetts/images/16.webp";
import Man16  from "../../assetts/images/17.jpg";
import Man17  from "../../assetts/images/18.webp";
import Bd  from "../../assetts/images/bd.jpg";
import fng from "../../assetts/images/fng.jpg";
import mp from "../../assetts/images/mp.jpg";
import ToyImage from '../../assetts/images/toy.jpg';
import ShopriteImage from "../../assetts/images/shoprittee.png";
import "./home.styles.css";

const HomePage= ()=>{
    return(
        <>
        <Header/>
        <section>
        <div>
            <img src={ShopriteImage} alt="#" className="shope"/>
        </div>
        <div className="sect">
            <img src={BottleImage} alt="#" className="shoper"/>
            <img src={ToyImage} alt="#" className="shoper"/>
        </div>
    </section>
    
    
        <div className="division">
            <div>
            <h1 className="header1">
                Products
            </h1>
        </div>
            <div className="header2">
               <button className="spanish2">View More</button> 
            </div>

        </div>
        <div className="container">
        <div className="disr">
            <div>
            <img src={Fruir} alt="#" className="imag"/>
             <p className="pea">Fruits & Vegetables</p>
            </div>

           <div>
            <img src={Meat} alt="#" className="imag"/>
            <p className="pea">Frozen Foods and Butchery</p>
           </div>

            <div>
                <img src={Chick} alt="#" className="imag"/>
                <p className="pea">Meals</p>
            </div> 
             
            <div>
                <img src={Rice} alt="#" className="imag"/>
                <p className="pea">Food</p>
            </div>
            
            <div>
                <img src={Wine} alt="#" className="imag"/>
                <p className="pea">Wine</p>
            </div>

             <div>
                <img src={Drinks} alt="#" className="imag"/>
                <p className="pea">Non Alchoholic Drinks</p>
             </div>

            <div>
                <img src={Bakery} alt="#" className="imag"/>
                <p className="pea">Bakery</p>
            </div>

            <div>
                <img src={Donut} alt="#" className="imag"/>
                <p className="pea">Snacks</p>
            </div>

            <div>
                <img src={Coffee} alt="#" className="imag"/>
                 <p className="pea">Coffee & Tea</p>
            </div>

            <div>
                <img src={Toy} alt="#" className="imag"/>
                <p className="pea">Liquor</p>
            </div>
            
            <div>
                <img src={Care} alt="#" className="imag"/>
                <p className="pea">Personal Care</p>
            </div>

            <div>
                <img srcn={Clean} alt="#" className="imag"/>
                <p className="pea">Cleaning</p>
            </div>

        </div>
    </div>
    <section>
        
    
        <div className="division">
            <div>
            <h1 className="header1">
               Top Selling Products
            </h1>
        </div>
            <div className="header2">
               <button className="spanish2">View More</button> 

            </div>
        </div>
            <div className="container">
                <div className="disr">

           <div>
            <Link to="">
            <img src={Man} alt="#" className="image"/>
            </Link>
            <p>Cape Leopard Leap Lookout White Wine 750Ml</p>
           </div>

           <div>
            <img src={Tan1} alt="#" className="image"/>
            <p>Apples (Red) X 12</p>
           </div>

           <div>
            <img src={Ban2} alt="#" className="image"/>
            <p>Fox’s Chunkie White Chocolate Cookies 180g</p>
           </div>
            
           <div>
            <img src={Van3} alt="#" className="image"/>
            <p>Funtuna Prepacked Eggs X30</p>
           </div>

           <div>
            <img src={Can4} alt="#" className="image"/>
            <p>Grape Red Seedless</p>
           </div>

           <div>
            <img src={Aan5} alt="#" className="image"/>
            <p>Chips Pringles 165G, Original</p>
           </div>

           <div>
            <img src={Yan6} alt="#" className="image"/>
            <p>Peak Full Cream Milk Powder 360g Refill</p>
           </div>

           <div>
            <img src={Man7} alt="#" className="image"/>
            <p>Apples Green: Golden Delicious X6</p> 
           </div>

           <div>
            <img src={Man8} alt="#" className="image"/>
            <p>Tampax Super Plus Tampons 20S Pack</p>
           </div>

           <div>
            <img src={Man9} alt="#" className="image"/>
            <p>Dano Powder Milk 350g</p>
           </div>

           <div>
            <img src={Man10} alt="#" className="image"/>
            <p>Titus Frozen Fish Gsf 1Kg</p>
           </div>

           <div>
            <img src={Man11} alt="#" className="image"/>
            <p>Grape Red Globe PP 1S Pack</p>
           </div>

           <div>
            <img src={Man12} alt="#" className="image"/>
            <p>Pringles 165G, Texas Bbq</p>
           </div>

           <div>
            <img src={Man13} alt="#" className="image"/>
            <p>Lemon Imported X6</p>
           </div>

           <div>
            <img src={Man14} alt="#" className="image"/>
            <p>Frosty Bite Ice Cream 550Ml Strawberry</p>
           </div>

           <div>
            <img src={Man15} alt="#" className="image"/>
            <p>Funtuna Prepacked Eggs X24</p>
           </div>

           <div>
            <img src={Man16} alt="#" className="image"/>
            <p>Energy Drink Regular Red Bull 6X250ml Can</p>
           </div>

           <div>
            <img src={Man17} alt="#" className="image"/>
            <p>Apple Royal Gala PP 1S Pack</p>
           </div>
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
    )
}
export default HomePage;

