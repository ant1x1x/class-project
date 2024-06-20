import React from 'react';
import Header from '../../components/header/header.components';
import Footer from '../../components/footer/footer.component';
import { topSellingData } from '../../data';
import ariseImage from '../../assetts/images/shop.jpg';
import { useParams } from "react-router-dom";
import "./selling-details.styles.css";

const SellingDetails = ({ category}) => {
    const { id } = useParams();
    const data = category === "topSellingData" ? topSellingData : topSellingData;
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
      <div className="main-wrapper">
        {/* <h4>{product.text}</h4> */}
      </div>
       <div className="container">
      <div className="content">
        <div className="ledFlex">
            <div>
            <img src={product.src1} alt="#" className="leo-img" />
            <h1 className="leoText">Related products</h1>
            </div>
            <div>
              <h1 className="leoText">{product.text}</h1>
            </div>
        </div>
        <div className="bullFlex">
          <div>
            <img src={product.src2} alt="#" className="bull-img" />
            <h2 className="leoText">
              {product.bullText1}
              <br />
              {product.bullText1Sub}
            </h2>
          </div>
          <div>
            <img src={product.src3} alt="#" className="bull-img" />
            <h2 className="leoText">
              {product.bullText2}
              <br />
              {product.bullText2Sub}
              <br />
              {product.bullText2Sub1}
            </h2>
          </div>
          <div>
            <img src={product.src4} alt="#" className="bull-img" />
            <h2 className="leoText">
              {product.bullText3}
              <br />
              {product.bullText3Sub}
              <br />
              {product.bullText3Sub1}
            </h2>
          </div>
        </div>
      </div>
      <div className="vertical-line">
        <div className="vertDiv">
         <div className="search-container">
            <input type="search" className="vertSearch" placeholder="" required />
            {/* <button type="submit" className="searchButton">🔍</button> */}
         </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
    );
}

export default SellingDetails;