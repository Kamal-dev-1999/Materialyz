import React, { useEffect, useState } from "react";
import axios from "axios";
import PostPaginations from "@/components/post-paginations";
import { Col, Row } from "react-bootstrap";
import ProductCard from "@/components/product-card";
import Link from "next/link";

const ProductsData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from the SQLite API
    axios
      .get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <section className="service-style-three sec-pad">
      <div className="thm-container">
        <Row>
          {products.map((product, index) => (
            <Col md={6} lg={3} key={index}>
              {/* Link to ProductDetails page dynamically based on product.id */}
              <Link href={`/product-details/${product.id}`} passHref>
                <ProductCard data={product} />
              </Link>
            </Col>
          ))}
        </Row>
        <PostPaginations />
      </div>
    </section>
  );
};

export default ProductsData;
