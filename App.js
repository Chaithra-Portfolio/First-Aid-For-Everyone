import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EmergencyNumbers from './pages/EmergencyNumbers';
import Documents from './pages/Documents';
import NearbyHospitals from './pages/NearbyHospitals';
import VideoPage from './pages/VideoPage';
import FeedbackForm from './components/FeedbackForm'; // ✅ Import FeedbackForm
import './App.css';
import logo from './logo.png';

// Fallback page for undefined routes
const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

const App = () => {
  return (
    <Router>
      {/* Custom Navbar */}
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Title in the center */}
        <div className="nav-center">
          <h1>First Aid for Everyone</h1>
        </div>

        {/* Navigation links on the right */}
        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/emergency-numbers">Emergency Numbers</a>
          <a href="/documents">Documents</a>
          <a href="/nearbyhospitals">Nearby Hospitals</a>
          <a href="/feedback">Feedback</a> {/* ✅ Feedback link added */}
        </div>
      </nav>

      {/* Route Components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency-numbers" element={<EmergencyNumbers />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/feedback" element={<FeedbackForm />} /> {/* ✅ New Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;



