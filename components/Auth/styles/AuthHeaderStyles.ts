import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  containerBlack: {
    height: SIZES.height > 700 ? "65%" : "60%",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  linearGradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  title: {
    width: "80%",
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 45,
  },
});
