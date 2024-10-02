import React from 'react';
import './CategoryTabs.css';
import {
  FaStar,
  FaHome,
  FaMountain,
  FaWater,
  FaUmbrellaBeach,
  FaTree,
  FaSwimmingPool,
  FaFortAwesome, 
  FaLeaf,
  FaWarehouse,
} from 'react-icons/fa';

const categories = [
  { icon: <FaStar />, label: "Icons" },
  { icon: <FaHome />, label: "Cabins" },
  { icon: <FaMountain />, label: "Amazing views" },
  { icon: <FaSwimmingPool />, label: "Amazing pools" },
  { icon: <FaUmbrellaBeach />, label: "Tropical" },
  { icon: <FaTree />, label: "Treehouses" },
  { icon: <FaLeaf />, label: "OMG!" },
  { icon: <FaFortAwesome />, label: "Mansions" }, 
  { icon: <FaWater />, label: "Beachfront" },
  { icon: <FaWarehouse />, label: "Off-the-grid" },
  // Add more categories as needed
];

const CategoryTabs = () => {
  return (
    <div className="category-tabs">
      {categories.map((category, index) => (
        <div key={index} className="category-tab">
          <div className="category-icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
