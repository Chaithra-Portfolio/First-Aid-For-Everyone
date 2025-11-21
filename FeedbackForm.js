import React, { useState } from 'react';
import './FeedbackForm.css'; // Ensure this is present and updated

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, feedback, rating }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Feedback submitted!');
        setEmail('');
        setFeedback('');
        setRating(0);
      } else {
        alert('❌ Submission failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('❌ Something went wrong.');
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h2>Leave Your Feedback</h2>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Write your feedback here..."
            value={feedback}
            required
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                style={{
                  color: (hovered || rating) >= star ? '#ffc107' : '#ccc',
                }}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;


