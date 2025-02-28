import React, { useState } from "react";
import Link from "next/link";

// PriceCard Component
const PriceCard = ({ data }) => {
  const { name, price, icon, lists, url, image, images = [] } = data; // Default images to an empty array if not provided

  const [timeRemaining, setTimeRemaining] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hard-coded target date for the countdown (e.g., 2025-01-25 12:00)
  const targetDate = "2025-01-30 12:00";

  // Function to calculate time remaining
  const calculateTimeRemaining = () => {
    const now = new Date().getTime(); // Current time
    const target = new Date(targetDate).getTime(); // Convert target date string to timestamp

    const distance = target - now;

    // If the countdown has expired
    if (distance <= 0) {
      setTimeRemaining("Expired");
      return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  // Update the timer every second
  React.useEffect(() => {
    calculateTimeRemaining(); // Initialize the timer on mount
    const timer = setInterval(calculateTimeRemaining, 1000); // Update every second

    return () => clearInterval(timer); // Clean up the interval when the component unmounts
  }, [targetDate]);

  // Handlers to change the image on hover
  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
    }
  };

  const handleMouseLeave = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Move to the previous image
    }
  };

  return (
    <div className="single-pricing text-center" style={{ minHeight: '250px', height: '100%' }}>
      <div className="img-box">
        {/* Image Switcher on hover */}
        <div
          onMouseEnter={handleMouseEnter}  // Move to next image on hover
          onMouseLeave={handleMouseLeave}  // Move to previous image on mouse leave
        >
          {images.length > 0 ? (
            <img src={images[currentImageIndex]} style={{ width: "80%" }} alt={name} loading="lazy" />
          ) : (
            <img src={image} style={{ width: "80%" }} alt={name} loading="lazy" /> // Fallback to static image
          )}
        </div>
      </div>
      <span style={{ fontSize: "25px", marginTop: "20px", fontFamily: "sans-serif", fontWeight: "600" }} className="price-label">
        {name}
      </span>
      <h3 style={{ fontSize: "25px" }}>
        <span style={{ fontSize: "20px" }} className="price-currency">₹</span>
        {price}
      </h3>
      <br />
      <Link href={url}>
        <a style={{ marginTop: "10px" }} className="thm-btn yellow-bg">
          Place Bid
        </a>
      </Link>
      {/* Countdown Timer */}
      <div style={{ marginTop: "20px", fontSize: "20px", color: "#ff841f" }}>
        <strong>Time Remaining: </strong>
        {timeRemaining}
      </div>
      <div className="line"></div>
      <ul className="list-box">
        {lists.map(({ name }, index) => (
          <li style={{ fontWeight: "700", fontSize: "22px", color: "black" }} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
