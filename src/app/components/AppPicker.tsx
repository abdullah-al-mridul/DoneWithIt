import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ComponentType, useState } from "react";
import {
  Button,
  DimensionValue,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

type ItemType = {
  label: string;
  value: any;
};

interface PickerItemProps {
  label: string;
  onPress?: () => void;
  item?: any;
}

interface AppPickerProps extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: ItemType[];
  onSelectItem: (item: ItemType) => void;
  selectedItem?: ItemType | null;
  placeholder?: string;
  width?: DimensionValue;
  PickerItemComponent?: ComponentType<PickerItemProps>;
  numberOfColumns?: number;
}

const AppPicker = ({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
  width = "100%",
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}: AppPickerProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        {/* <Screen> */}
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
              item={item}
            />
          )}
        />
        {/* </Screen> */}
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
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

export default AppPicker;
