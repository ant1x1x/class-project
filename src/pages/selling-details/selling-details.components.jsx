import React from 'react';
import Header from '../../components/header/header.components';
import { topSellingData } from '../../data';
import ariseImage from '../../assetts/images/shop.jpg';
import { useParams } from "react-router-dom";

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
      <div>
        <h4>{product.text}</h4>
      </div>
      </>
    );
}

export default SellingDetails;