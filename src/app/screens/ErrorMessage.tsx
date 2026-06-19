import { StyleSheet } from "react-native";
import AppText from "../components/AppText";

const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
