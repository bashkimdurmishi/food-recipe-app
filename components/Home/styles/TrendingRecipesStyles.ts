import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  title: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
});
