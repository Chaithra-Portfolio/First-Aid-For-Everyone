import React, { useEffect } from "react";

const VideoPlayer = ({ videoId, title, steps, email }) => {
  useEffect(() => {
    console.log("📺 VideoPlayer Mounted with:", {
      videoId,
      title,
      email,
    });

    const recordVideoView = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/videoviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            videoTitle: title,
          }),
        });

        const data = await res.json();
        console.log("📥 View recorded:", data);
      } catch (err) {
        console.error("❌ Error recording view:", err);
      }
    };

    if (email && title) {
      recordVideoView(); // Only send if both email and title exist
    } else {
      console.warn("⚠️ Missing email or title, not sending view data", {
        email,
        title,
      });
    }
  }, [email, title, videoId]); // ✅ include videoId to avoid warning

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-64 rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {steps?.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">First Aid Steps:</h4>
          <ul className="list-disc list-inside space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="w-20 h-20 rounded-lg"
                />
                <p>{step.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;



