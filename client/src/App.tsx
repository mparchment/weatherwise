import React, { useContext, useState, useEffect } from 'react';
import { LocationContext } from './contexts/LocationContext';
import Title from './components/Title/Title';
import Info from './components/Info/Info';
import Splash from './components/Splash/Splash';

const App: React.FC = () => {
  const { locationData } = useContext(LocationContext);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (locationData) {
      setShowContent(true);
    }
  }, [locationData]);

  return (
    <>
      <Splash loading={!locationData} />
      <div style={{ 
        opacity: showContent ? 1 : 0, 
        transition: 'opacity 4s cubic-bezier(0.25, 0.1, 0.25, 1)' 
      }}>
        <Title />
        <Info />
      </div>
    </>
  );
}

export default App;
