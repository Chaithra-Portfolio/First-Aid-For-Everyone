import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      {/* Introduction */}
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>First Aid for Everyone</strong> – your go-to platform for learning life-saving first aid techniques. 
        Our mission is to provide easy access to essential first aid information and empower everyone to handle emergencies effectively.
      </p>

      {/* Why First Aid is Important */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Why First Aid is Important</h2>
      <p className="mb-4">
        First aid can save lives, reduce recovery time, and prevent medical conditions from worsening. Knowing the basics can make a huge difference in critical situations.
      </p>

      {/* Features of the Website */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Features of Our Website</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Access to a wide range of first aid instructional videos.</li>
        <li>Search functionality for quick access to specific information.</li>
        <li>Emergency contact numbers and location tracking.</li>
        <li>Find nearby hospitals using geolocation services.</li>
        <li>Downloadable first aid PDFs and other educational resources.</li>
      </ul>

      {/* How to Use the Platform */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">How to Use</h2>
      <p className="mb-4">
        Simply search for the topic you're interested in, watch educational videos, or read documents. Use the emergency features to find help when needed.
      </p>

      {/* Mission and Vision */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Mission & Vision</h2>
      <p className="mb-4">
        Our mission is to spread awareness about first aid and provide tools that help individuals take the right action during emergencies. Our vision is to become a leading platform for first aid education worldwide.
      </p>

      {/* Contact Information */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
      <p className="mb-2">Email: chaithran389@gmail.com</p>
      <p>Phone: +91 8050642454</p>
    </div>
  );
};

export default About;

