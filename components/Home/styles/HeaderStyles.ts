import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: SIZES.padding,
    alignItems: "center",
    height: 80,
  },
  headerContainer: {
    flex: 1,
  },
  headerText: {
    color: COLORS.darkGreen,
    ...FONTS.h2,
  },
  text: {
    marginTop: 3,
    color: COLORS.gray,
    ...FONTS.body3,
  },
});
