import React, { useEffect } from "react";


const WindyMap = () => {
  useEffect(() => {
    const options = {
      key: "itOm9IOUMjEiaGwLUTvAdAq5gjGd9F1g", // Map Forecast key
      lat: 39.9607, // West Chester, PA
      lon: -75.6055,
      zoom: 7,
      overlay: "wind",
    };

    const initWindy = () => {
      if (window.windyInit) {
        window.windyInit(options, () => {
          // Windy map initialized — nothing else needed for now
        });
      }
    };

    if (window.windyInit) {
      initWindy();
    } else {
      const check = setInterval(() => {
        if (window.windyInit) {
          clearInterval(check);
          initWindy();
        }
      }, 500);
    }
  }, []);

  return <div id="windy" style={{ width: "100%", height: "100vh" }}></div>;
};

export default WindyMap;
