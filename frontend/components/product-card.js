import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  const { image, title, count, price, text, url } = data;

  const textBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',  // Space content within the box
    minHeight: '250px', // Set a fixed minimum height for consistency
    // padding: '15px',
    backgroundColor: '#f4f5f9',
    height: '100%',  // Ensures the box expands to fill the available height
  };

  return (
    <div className="single-service-three">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box hvr-bounce-to-bottom" style={textBoxStyle}>
        <Link href={url}>
          <a>
            <h3 style={{fontSize:"22px"}}>{title}</h3>
          </a>
        </Link>
        {/* <div className="meta-info">
          <p>
            {count} cards from <span>${price}</span>
          </p>
        </div> */}
        <p>{text}</p>
        <Link href={url}>
          <a className="read-more fas fa-angle-right"></a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
