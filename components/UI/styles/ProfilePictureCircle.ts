import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  title: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
});
