import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom hook to move the map to user location
const MapUpdater = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView(location, 14); // Adjust zoom level
    }
  }, [location, map]);
  return null;
};

const NearbyHospitals = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  // Custom icon for user location
  const userIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/kml/shapes/man.png",
    iconSize: [35, 35],
  });

  // Get User's Location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          fetchHospitals(latitude, longitude); // Fetch hospitals after getting user location
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  // Fetch nearby hospitals from OpenStreetMap (Overpass API)
  const fetchHospitals = async (lat, lon) => {
    const query = `
      [out:json];
      node["amenity"="hospital"](around:10000, ${lat}, ${lon});
      out;
    `;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const hospitalsData = data.elements.map((element) => ({
        id: element.id,
        name: element.tags.name || "Unknown Hospital",
        location: [element.lat, element.lon],
      }));
      setHospitals(hospitalsData);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Find Nearby Hospitals</h1>
      {userLocation ? (
        <MapContainer center={userLocation} zoom={13} style={{ height: "500px", width: "100%" }}>
          <MapUpdater location={userLocation} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Show User Location with Custom Icon */}
          <Marker position={userLocation} icon={userIcon}>
            <Popup>📍 You are here</Popup>
          </Marker>

          {/* Show Hospitals */}
          {hospitals.map((hospital) => (
            <Marker key={hospital.id} position={hospital.location}>
              <Popup>🏥 {hospital.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
};

export default NearbyHospitals;



