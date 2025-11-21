import React, { useEffect } from 'react';

const VideoViewSender = ({ email, videoTitle }) => {
  useEffect(() => {
    const sendViewData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videoviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, videoTitle }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Server error:', errorData);
          return;
        }

        const data = await response.json();
        console.log('✅ View saved:', data.message);
      } catch (error) {
        console.error('❌ Fetch error:', error);
      }
    };

    if (email && videoTitle) {
      sendViewData();
    }
  }, [email, videoTitle]);

  return null; // no visible UI needed
};

export default VideoViewSender;
