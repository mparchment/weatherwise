import { FloatingTitle, Search, MobileSearch, DesktopTitle, MobileTitle } from './Title.styles.tsx'
import { LocationContext } from "../../contexts/LocationContext";
import { useContext, useState } from "react";

const TitleComponent = () => {
  const { setLocationData } = useContext(LocationContext);
  const [searchValue, setSearchValue] = useState<string>('Colesville'); // initial searchValue set to 'Colesville'

  // This function will be called whenever the user types into the search box
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // you might want to update the locationData state here as well depending on your app logic
    // setLocationData(event.target.value);
  }

  return (
    <FloatingTitle>
      <DesktopTitle>WeatherWise — <Search type="text" value={searchValue} onChange={handleSearchChange}/></DesktopTitle>
      <MobileTitle>The Weather<MobileSearch type="text" value={searchValue} onChange={handleSearchChange}/></MobileTitle>
    </FloatingTitle>
  );
}

export default TitleComponent;
