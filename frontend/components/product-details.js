import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the product id from the URL

  useEffect(() => {
    if (id) {
      // Fetch product data based on the product id
      axios
        .get(`http://localhost:5000/products/${id}`)
        .then((response) => {
          setProduct(response.data); // Set product data to state
        })
        .catch((error) => {
          console.error("There was an error fetching the product details!", error);
        });
    }
  }, [id]); // Fetch product data when the id changes

  // Display a loading message until the product is fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-details sec-pad">
      <Container>
        <Row>
          <Col md={6}>
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              fluid
              className="product-image"
            />
          </Col>
          <Col md={6}>
            {/* Product Information */}
            <h2>{product.title}</h2>
            <p>{product.text}</p> {/* Assuming material description is in 'text' */}

            {/* Material Description */}
            <h5>Material Description</h5>
            <p>{product.material_description || "No material description available."}</p>

            {/* Grades */}
            <h5>Grades</h5>
            <ul>
              {product.grades.split(',').map((grade, index) => (
                <li key={index}>{grade}</li>
              ))}
            </ul>

            {/* Quantity */}
            <h5>Quantity</h5>
            <p>{product.count} items available</p> {/* Assuming count refers to available stock */}

            {/* Size */}
            <h5>Size</h5>
            <p>{product.size || "N/A"}</p> {/* If size is available, show it, otherwise show N/A */}

            {/* Buy Now Button */}
            <Button variant="primary" onClick={() => alert("Product added to cart!")}>
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
