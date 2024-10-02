// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CategoryTabs from './components/CategoryTabs'; // Import the CategoryTabs component
import FeaturedSection from './components/FeaturedSection';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <CategoryTabs /> {/* Add CategoryTabs below the SearchBar */}

      <main>
        <ProfileSection />
        <FeaturedSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
