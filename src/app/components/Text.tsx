import { Text, TextProps } from "react-native";
import defaultStyles from "../config/styles";

interface Props extends TextProps {
  children: React.ReactNode;
  style?: {};
}

const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
