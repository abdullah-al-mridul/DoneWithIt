import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";

interface AppTextInputType extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const AppPicker = ({ icon, placeholder }: AppTextInputType) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder} </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
