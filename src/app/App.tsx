import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import AppButton from "./components/Button";
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
      <AppButton title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image
          source={{
            uri: imageUri[0].uri,
          }}
          style={{
            height: 200,
            width: 200,
          }}
        />
      )}
    </Screen>
  );
};

export default App;
