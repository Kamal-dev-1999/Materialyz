import React from 'react';

const SellerProfile = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '900px', margin: 'auto', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          <h1 style={{ color: '#ff6600' }}>materialyz.com</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type='text' placeholder='Search ...' style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
            <span style={{ fontSize: '20px' }}>🔔 💬 🔘</span>
          </div>
        </header>
        
        <h2 style={{ textAlign: 'center', color: '#333' }}>Seller Profile</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src='profile-image.png' alt='Company Logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <div>
            <h3 style={{ color: '#ff6600' }}>EcoBuild Solutions Pvt. Ltd.</h3>
            <p><strong>Annual Turnover:</strong> $5,000,000</p>
            <p><strong>Company Website:</strong> <a href='https://www.ecobuild.com' style={{ color: '#007bff', textDecoration: 'none' }}>www.ecobuild.com</a></p>
            <p><strong>Company Email:</strong> <a href='mailto:info@ecobuild.com' style={{ color: '#007bff', textDecoration: 'none' }}>info@ecobuild.com</a></p>
          </div>
          <div>
            <p style={{ fontSize: '20px', color: '#ffcc00' }}>⭐⭐⭐⭐⭐</p>
            <p><strong>Owner Name:</strong> Jane Doe</p>
            <p><strong>Owner Role:</strong> Chief Executive Officer</p>
            <p><strong>Owner Contact:</strong> +91 73089 6752</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Add Catalogue</button>
            <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>RFQs</button>
            <button style={{ backgroundColor: '#ff6600', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Analytics</button>
          </div>
          <div style={{ flex: '3', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <h4>Export Details</h4>
              <p>International: Yes</p>
              <p>Export: Yes</p>
              <p>Domestic Sale: Yes</p>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <h4>Certification</h4>
              <p>Upload your official certifications and get validated</p>
              <button style={{ backgroundColor: '#ddd', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}>Upload</button>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <h4>Industries</h4>
              <p>Select industries that you are involved with</p>
              <button style={{ backgroundColor: '#ddd', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}>Add Industries</button>
            </div>
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
              <h4>Products/Facilities</h4>
              <p>Select products/facilities that you are involved with</p>
              <button style={{ backgroundColor: '#ddd', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}>Add Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
