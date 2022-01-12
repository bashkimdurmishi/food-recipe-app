import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  recipeIconContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  recipeIcon: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
    paddingVertical: SIZES.radius,
  },
  normalText: {
    width: "70%",
    ...FONTS.body4,
  },
  hyperlinkText: {
    color: COLORS.darkGreen,
    textDecorationLine: "underline",
    ...FONTS.h4,
  },
  hyperlinkContainer: {
    marginTop: 10,
  },
});
