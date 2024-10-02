import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const featuredItems = [
    { title: "Luxury Rentals", description: "Discover our luxury rental options.", imageUrl: "luxury.jpg" },
    { title: "Budget-Friendly Stays", description: "Affordable options available.", imageUrl: "budget.jpg" },
    { title: "Rental Guides", description: "Explore guides to enhance your stay.", imageUrl: "guide.jpg" },
  ];

  return (
    <section className="featured-section">
      <h2>Featured Highlights</h2>
      <div className="featured-grid">
        {featuredItems.map((item, index) => (
          <div className="featured-item" key={index}>
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;

