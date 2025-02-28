import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  // State to hold the form data and list of products
  const [productData, setProductData] = useState({
    image: '',
    title: '',
    count: '',
    price: '',
    text: '',
    material_description: '',  // New field for material description
    url: '',
    grades: '',
    size: '',
  });
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });
  }, [products]);  // Re-fetch products after adding or deleting a product

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Handle form submission for adding a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/products', productData);
      setProductData({
        image: '',
        title: '',
        count: '',
        price: '',
        text: '',
        material_description: '',  // Reset material description field
        url: '',
        grades: '',
        size: '',
      });
      alert('Product added successfully!');
    } catch (error) {
      alert('There was an error adding the product.');
      console.error(error);
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      alert('There was an error deleting the product.');
      console.error(error);
    }
  };

  return (
    <div className="add-and-delete-product-page">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Count</label>
          <input
            type="number"
            name="count"
            value={productData.count}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="text"
            value={productData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Material Description</label>
          <textarea
            name="material_description"
            value={productData.material_description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grades</label>
          <input
            type="text"
            name="grades"
            value={productData.grades}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={productData.size}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
