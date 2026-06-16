import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

const ListItem = ({ title, subTitle, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
