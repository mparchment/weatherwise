import React, { useState, useEffect, useRef } from 'react';

interface SplashProps {
  loading: boolean;
}

const Splash: React.FC<SplashProps> = ({ loading }) => {
  const [displayText, setDisplayText] = useState('');
  const weatherwise = "Weatherwise";
  const [fade, setFade] = useState(false);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let progressText = '';
    if (loading) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < weatherwise.length) {
          progressText += weatherwise[i];
          setDisplayText(progressText);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 150);

      return () => clearInterval(interval);
    }

    if (!loading) {
      if (fadeRef.current) {
        setFade(true);
        setTimeout(() => {
          setDisplayText('');
          setFade(false);
        }, 500);
      }
    }
  }, [loading]);

  if (loading || displayText) {
    return (
      <div ref={fadeRef} style={{
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
