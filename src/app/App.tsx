import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import Screen from "./components/Screen";
const App = () => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access images");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
};

export default App;
