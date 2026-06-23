import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import colors from "../config/colors";

interface Props {
  imageUri: string | undefined;
  onChangeImage?: (asset: ImagePicker.ImagePickerAsset[] | undefined) => void;
}

export default function ImageInput({ imageUri, onChangeImage }: Props) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access images");
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => (onChangeImage ? onChangeImage(undefined) : null),
        },
        {
          text: "NO",
        },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality: 0.5,
      });
      if (!result.canceled && onChangeImage) {
        onChangeImage(result.assets);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && (
          <Image
            source={{
              uri: imageUri,
            }}
            style={styles.image}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
