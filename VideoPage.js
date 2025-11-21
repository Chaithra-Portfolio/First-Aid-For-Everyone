import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from './VideoPlayer'; // Now handles view saving
import './VideoPage.css';

const VideosPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase().trim();

  // Simulated user email (replace with dynamic logic later)
  const userEmail = 'chaithra@example.com';

  // Video data with empty steps array (can be updated later with actual steps & images)
  const videoData = [
    {
      id: 'nH8o-bgwo_g',
      title: 'How to Treat a Snake Bite',
      tags: ['snake bite', 'bite', 'snake', 'first aid'],
      steps: [],
    },
    {
      id: '3Ag8rhvpCuE',
      title: 'Stopping Severe Bleeding',
      tags: ['bleeding', 'first aid', 'emergency'],
      steps: [],
    },
    {
      id: 'Dt1oncnrkp4',
      title: 'How to Handle Burns',
      tags: ['burns', 'first aid', 'treatment'],
      steps: [],
    },
    {
      id: 'hizBdM1Ob68',
      title: 'CPR Emergency Guide',
      tags: ['cpr', 'resuscitation', 'emergency'],
      steps: [],
    },
    {
      id: 'sPzXAVNVJr0',
      title: 'First Aid for Fractures',
      tags: ['fracture', 'broken bone', 'first aid'],
      steps: [],
    },
    {
      id: 'QtqLAS5rgGQ',
      title: 'First Aid for Choking',
      tags: ['choking', 'heimlich', 'emergency'],
      steps: [],
    },
  ];

  // Filter logic (shows all if no query)
  const filteredVideos = searchQuery
    ? videoData.filter((video) =>
        video.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
      )
    : videoData;

  return (
    <div className="video-page">
      <h2 className="search-heading">
        {searchQuery
          ? `Search Results for: ${searchQuery}`
          : 'All First Aid Videos'}
      </h2>

      <div className="video-list">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video.id}>
              <VideoPlayer
                videoId={video.id}
                title={video.title}
                email={userEmail}
                steps={video.steps || []} // ✅ Prevents undefined steps
              />
            </div>
          ))
        ) : (
          <p>No related videos found. Try different keywords.</p>
        )}
      </div>
    </div>
  );
};

export default VideosPage;






