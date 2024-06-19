import React from 'react';
import Header from '../../components/header/header.components';
import { productData } from '../../data';
import ariseImage from '../../assetts/images/shop.jpg';
import { Link, useParams } from "react-router-dom";
import "./home-details.styles.css";

const HomeDetails = ({ category}) => {
    const { id } = useParams();
    const data = category === "productData" ? productData : productData;
    const product = data.find((item) => item.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    const styles = {
        backgroundImage: `url(${ariseImage})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
        height: '60vh',
        padding: '30px',
        backgroundRepeat: 'no-repeat'
    }

    return (
      <>
      <Header />
      <div style={styles}></div>
      <div className="productDiv">
        <h4 className="heading-product">{product.text}</h4>
        <div className="shop-sect">
          <div>
            <h3 className="heading-tertiary">Showing 1-40 of 73 result</h3>
          </div>
          <div>
            <h3 className="text-ogo">Default sorting</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src1} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
             {product.appleText1}
             <br />
             {product.appleText1Sub}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src2} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText2}
                <br />
                {product.appleText2Sub}
                <br />
                {product.appleText2Sub1}
             </p>
           </div>
           <div>
             <Link>
             <img src={product.src3} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText3}
                <br />
                {product.appleText3Sub}
                <br />
                {product.appleText3Sub1}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src4} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText4}
                <br />
                {product.appleText4Sub}
                <br />
                {product.appleText4Sub1}
            </p>
           </div>
            <div>
           <Link>
           <img src={product.src5} alt={product.alt} className="imag" />
           </Link>
            <p className="text-apple">
                {product.appleText5}
                <br />
                {product.appleText5Sub}
                <br />
                {product.appleText5Sub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src6} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
             {product.appleText6}
             <br />
             {product.appleText6Sub}
             <br />
             {product.appleText6Sub1}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src7} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText7}
                <br />
                {product.appleText7Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src8} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText8}
                <br />
                {product.appleText8Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src9} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText9}
                <br />
                {product.appleText9Sub}
                <br />
                {product.appleTextSub1}
             </p>
           </div>
            <div>
             <Link>
             <img src={product.src10} alt={product.alt} className="imag" />
             </Link>
            <p className="text-apple">
                {product.appleText10}
               <br />
               {product.appleText10Sub}
               <br />
               {product.appleText10Sub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src11} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
              {product.appleText11}
              <br />
              {product.appleText11Sub}
              <br />
              {product.appleText11Sub1}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src12} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText12}
                <br />
                {product.appleText12Sub}
              </p>
           </div>
           <div>
             <Link>
             <img src={product.src13} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText13}
                <br />
                {product.appleText13Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src14} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText14}
                <br />
                {product.appleText14Sub}
             </p>
           </div>
            <div>
             <Link>
               <img src={product.src15} alt={product.alt} className="imag" />
             </Link>
            <p className="text-apple">
                {product.appleText15}
                <br />
                {product.appleText15Sub}
                <br />
                {product.appleText15Sub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src16} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
            {product.appleText16}
            <br />
            {product.appleText16Sub}
          </p>
           </div>
           <div>
              <Link>
              <img src={product.src17} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText17}
                <br />
                {product.appleText17Sub}
             </p>
           </div>
           <div>
             <Link>
             <img src={product.src18} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText18}
                <br />
                {product.appleText18Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src19} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText19}
                <br />
                {product.appleText19Sub}
                <br />
                {product.appleText19Sub1}
            </p>
           </div>
            <div>
             <Link>
               <img src={product.src20} alt={product.alt} className="imag" />
             </Link>
            <p className="text-apple">
             {product.appleText20}
             <br />
             {product.appleText20Sub}
             <br />
             {product.appleText20Sub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src21} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
             {product.appleText21}
             <br />
             {product.appleText21Sub}
             <br />
             {product.appleText21Sub1}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src22} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                 {product.appleText22}
                 <br /> 
                 {product.appleText22Sub}
                 <br />
                 {product.appleText22Sub1}
              </p>
           </div>
           <div>
             <Link>
             <img src={product.src23} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText23}
                <br />
                {product.appleText23Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src24} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText24}
                <br />
                {product.appleText24Sub}
            </p>
           </div>
            <div>
             <Link>
              <img src={product.src25} alt={product.alt} className="imag" />
             </Link>
            <p className="text-apple">
                {product.appleText25}
                <br />
                {product.appleText25Sub}
                <br />
                {product.appleText25Sub1}
                </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src26} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
              {product.appleText26}
              <br />
              {product.appleText26Sub}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src27} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText27}
                <br />
                {product.appleText27Sub}
             </p>
           </div>
           <div>
             <Link>
             <img src={product.src28} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText28}
                <br />
                {product.appleText28Sub}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src29} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText29}
                <br />
                {product.appleText29Sub}
                <br />
                {product.appleTextSub1}
            </p>
           </div>
            <div>
            <img src={product.src30} alt={product.alt} className="imag" />
            <p className="text-apple">
                {product.appleText30 }
                <br />
                {product.appleText30Sub}
                <br />
                {product.appleTextSub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src31} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
            {product.appleText31}
            <br />
            {product.appleText31Sub}
            <br />
            {product.appleText31Sub1}
           </p>
           </div>
           <div>
              <Link>
              <img src={product.src32} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText32}
                <br />
                {product.appleText32Sub}
                <br />
                {product.appleText32Sub1}
             </p>
           </div>
           <div>
             <Link>
             <img src={product.src33} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText33}
                <br />
                {product.appleText33Sub}
                <br />
                {product.appleText33Sub1}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src34} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText34}
                <br />
                {product.appleText34Sub}
                <br />
                {product.appleText34Sub2}
            </p>
           </div>
            <div>
            <Link>
            <img src={product.src35} alt={product.alt} className="imag" />
            </Link>
            <p className="text-apple">
                {product.appleText35}
                <br />
                {product.appleText35Sub}
                <br />
                {product.appleTextSub1}
            </p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="disr">
           <div>
           <Link>
           <img src={product.src36} alt={product.alt} className="imag" />
           </Link>
           <p className="text-apple">
             {product.appleText36}
             <br />
             {product.appleText36Sub}
            </p>
           </div>
           <div>
              <Link>
              <img src={product.src37} alt={product.alt} className="imag" />
              </Link>
              <p className="text-apple">
                {product.appleText37}
                <br />
                {product.appleText37Sub}
             </p>
           </div>
           <div>
             <Link>
             <img src={product.src38} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText38}
                <br />
                {product.appleText38Sub}
                <br />
                {product.appleText38Sub1}
            </p>
           </div>
           <div>
             <Link>
             <img src={product.src39} alt={product.alt} className="imag" />
             </Link>
             <p className="text-apple">
                {product.appleText39}
                <br />
                {product.appleText39Sub}
            </p>
           </div>
            <div>
             <Link>
             <img src={product.src40} alt={product.alt} className="imag" />
             </Link>
            <p className="text-apple">
                {product.appleText40}
                <br />
                {product.appleText40Sub}
            </p>
            </div>
        </div>
      </div>
      </>
    );
}

export default HomeDetails;