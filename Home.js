import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/videos?search=${searchQuery}`);
    }
  };

  return (
    <div className="home-wrapper">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/videos/firstaid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="home-container">
        <h1 className="main-heading">
          Welcome to First Aid for Everyone
        </h1>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search first aid videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;


