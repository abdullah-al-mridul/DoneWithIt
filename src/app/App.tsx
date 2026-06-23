import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
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

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri ? imageUri[0].uri : undefined}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
};

export default App;
