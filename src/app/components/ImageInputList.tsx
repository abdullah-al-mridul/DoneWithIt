import { ImagePickerAsset } from "expo-image-picker";
import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

interface Props {
  imageUris?: string[];
  onRemoveImage?: (uri: string) => void;
  onAddImage?: (uri: ImagePickerAsset[] | undefined) => void;
}

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: Props) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => (onRemoveImage ? onRemoveImage(uri) : null)}
          />
        </View>
      ))}
      <ImageInput
        onChangeImage={(uri) => (onAddImage ? onAddImage(uri) : null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
