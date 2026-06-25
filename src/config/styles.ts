import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.select({
      ios: "Avenir",
      android: "Roboto",
      web: "Sans-serif",
    }),
    color: colors.dark,
  },
} as const;
