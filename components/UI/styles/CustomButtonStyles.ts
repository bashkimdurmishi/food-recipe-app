import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    ...FONTS.h3,
  },
});
