import { ImagePickerAsset } from "expo-image-picker";
import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() =>
          scrollView.current?.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() =>
                  onRemoveImage ? onRemoveImage(uri) : null
                }
              />
            </View>
          ))}
          <ImageInput
            onChangeImage={(uri) => (onAddImage ? onAddImage(uri) : null)}
          />
        </View>
      </ScrollView>
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
