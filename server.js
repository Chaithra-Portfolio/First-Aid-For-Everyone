const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const VideoView = require('./models/VideoView');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://chaithran9602:WuPLSZdZrgMyptZD@cluster0.rtya0hq.mongodb.net/firstaid?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Models
const feedbackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
  rating: Number,
  submittedAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Health check route
app.get('/api/ping', (req, res) => {
  res.send('✅ Backend is running');
});

// Save video view data
app.post('/api/videoviews', async (req, res) => {
  const { email, videoTitle } = req.body;

  if (!email || !videoTitle) {
    return res.status(400).json({ message: '❌ Email and video title are required' });
  }

  console.log('📩 Incoming video view data:', { email, videoTitle });

  try {
    const newView = new VideoView({ email, videoTitle });
    await newView.save();
    res.status(200).json({ message: '✅ Video view saved successfully' });
  } catch (err) {
    console.error('❌ Error saving video view:', err);
    res.status(500).json({ message: 'Error saving video view', error: err });
  }
});

// Save feedback data
app.post('/api/feedback', async (req, res) => {
  const { email, feedback, rating } = req.body;

  if (!email || !feedback || rating == null) {
    return res.status(400).json({ message: '❌ Email, feedback, and rating are required' });
  }

  try {
    const newFeedback = new Feedback({ email, feedback, rating });
    await newFeedback.save();
    console.log('📥 New feedback received:', newFeedback);
    res.status(201).json({ message: '✅ Feedback saved successfully' });
  } catch (err) {
    console.error('❌ Error saving feedback:', err);
    res.status(500).json({ message: 'Error saving feedback', error: err });
  }
});

// Optional: generic error handler
app.use((err, req, res, next) => {
  console.error('❗ Server error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
