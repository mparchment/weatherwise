import React from 'react';
import Title from './components/Title/Title';
import Info from './components/Info/Info';
import { LocationProvider } from './contexts/LocationContext';

const App: React.FC = () => {
  return (
    <LocationProvider>
      <Title />
      <Info />
    </LocationProvider>
  );
}

export default App;
