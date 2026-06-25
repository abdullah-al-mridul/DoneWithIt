import { Image, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../../assets/jacket.jpg")}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale!</AppText>
          <AppText style={styles.subTitle}>$100</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});

export default ListingDetailsScreen;
