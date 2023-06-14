import { FloatingTitle, Search, MobileSearch, DesktopTitle, MobileTitle } from './Title.styles.tsx'
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";

const TitleComponent = () => {
  const { setLocation, locationName } = useContext(LocationContext);

  return (
    <FloatingTitle>
      <DesktopTitle>The Weather — <Search type="text" value={locationName ? locationName : ''}/></DesktopTitle>
      <MobileTitle>The Weather<MobileSearch type="text"/></MobileTitle>
    </FloatingTitle>
  );
}

export default TitleComponent;
