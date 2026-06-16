import { Text } from "react-native";
import styles from "./styles";

const AppText = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
