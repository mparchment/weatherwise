import React, { useState, useEffect } from 'react';

interface SplashProps {
  loading: boolean;
}

const Splash: React.FC<SplashProps> = ({ loading }) => {
  const [displayText, setDisplayText] = useState('');
  const weatherwise = "Weatherwise";
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let progressText = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < weatherwise.length) {
        progressText += weatherwise[i];
        setDisplayText(progressText);
        i++;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading && displayText === weatherwise) {
      setFade(true);
      setTimeout(() => {
        setDisplayText('');
        setFade(false);
      }, 500);
    }
  }, [loading, displayText]);

  if (loading || displayText) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
        opacity: fade ? 0 : 1,
        transition: 'opacity 1s'
      }}>
        <h1 style={{ 
          WebkitTextStroke: '2px #000000', 
          textShadow: '5px 5px 0 #000000', 
          fontFamily: '"Bungee", sans-serif', 
          color: '#fff', 
          fontSize: '2.5rem', 
          textTransform: 'uppercase', 
          userSelect: 'none' 
        }}>
          {displayText}
        </h1>
      </div>
    );
  }

  return null;
};

export default Splash;
