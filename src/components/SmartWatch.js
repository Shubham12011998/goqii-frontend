// Smartwatch.js
import React, { useState, useEffect } from 'react';
import smartwatchImage from '../assets/images/smartwatch.png';
import watch1Image from '../assets/images/watch1.png'; // Import additional watch images
import watch2Image from '../assets/images/watch2.png'; // Import additional watch images
import '../styles/Smartwatch.css'; // Add CSS import for styling

const Smartwatch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="smartwatch"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <img src={smartwatchImage} alt="Smartwatch" className="smartwatch-image" />
      {isHovered && (
        <div className="additional-watches">
          <img src={watch1Image} alt="Watch 1" className="watch1-image" />
          <img src={watch2Image} alt="Watch 2" className="watch2-image" />
        </div>
      )}
      <div className="current-time">{currentTime.toLocaleTimeString().toUpperCase()}</div>
    </div>
  );
};

export default Smartwatch;
