import { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: () => ReactNode;
}

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: Props) => {
  return (
    <ReanimatedSwipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </ReanimatedSwipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
