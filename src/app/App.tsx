import { ImagePickerAsset } from "expo-image-picker";
import { useState } from "react";
import ImageInputList from "./components/ImageInputList";
import Screen from "./components/Screen";
const App = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAdd = (assets: ImagePickerAsset[] | undefined) => {
    if (assets && assets.length > 0) {
      setImageUris([...imageUris, assets[0].uri]);
    }
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={(uri) => handleRemove(uri)}
      />
    </Screen>
  );
};

export default App;
