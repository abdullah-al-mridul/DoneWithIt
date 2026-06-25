import * as Location from "expo-location";
import { useEffect, useState } from "react";
const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const loc = await Location.getCurrentPositionAsync();
        if (loc) {
          const {
            coords: { latitude, longitude },
          } = loc;
          setLocation({
            latitude,
            longitude,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
