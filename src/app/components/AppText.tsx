import { StyleSheet, Text } from "react-native";

const AppText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: {};
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
export default AppText;
