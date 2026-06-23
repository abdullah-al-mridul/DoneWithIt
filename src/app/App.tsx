import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import AppButton from "./components/Button";
import ImageInput from "./components/ImageInput";
import Screen from "./components/Screen";
const App = () => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access images");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const [imageUri, setImageUri] = useState<ImagePicker.ImagePickerAsset[]>();
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets);
        console.log(result.assets);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <AppButton title="Choose image" onPress={selectImage} />
      <ImageInput imageUri={imageUri ? imageUri[0].uri : undefined} />
    </Screen>
  );
};

export default App;
