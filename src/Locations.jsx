import { useEffect, useState } from 'react'
import './locations.css'
import Header from './Header.jsx'
// 

function Locations() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("https://api.maventplan.pl/sports_react/api")
      .then((res) => res.json())
      .then((data) => setSpots(data))
      .catch((err) => console.error("Błąd ładowania danych:", err));
  }, []);
  return (
    <>
    <Header></Header>
    <div className="fitness-container">
      {spots.map((spot, index) => (
        <div className="img-text" key={index}>
          <div className="left">
            {spot.map_embed ? (
              <iframe
                className="map"
                src={spot.map_embed}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`map-${index}`}
              ></iframe>
            ) : spot.image ? (
              <img
                src={spot.image}
                alt={spot.name || `Obraz ${index}`}
                width="600"
                height="450"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            ) : null}
          </div>
          <div className="right">
            <div className="text">
              <h3>{spot.name}</h3>
              {spot.description && <p>{spot.description}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer></Footer>
    </>
  );
}


export default Locations
