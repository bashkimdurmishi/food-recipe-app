import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  filtersTitleText: {
    marginTop: 5,
    color: COLORS.darkGreen,
    ...FONTS.h2,
  },
});
