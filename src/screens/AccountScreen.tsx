import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparetor from "../components/ListItemSeparetor";
import Screen from "../components/Screen";
import colors from "../config/colors";

type MenuItems = {
  title: string;
  icon: {
    name: ComponentProps<typeof MaterialCommunityIcons>["name"];
    backgroundColor: string;
  };
};

const menuItems: MenuItems[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen stylesExtend={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Abdullah Al Mridul"
          subTitle="rim89987@gmail.com"
          image={require("../../assets/jacket.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparetor}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
