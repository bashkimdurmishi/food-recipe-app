import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentDarkGray,
  },
});
