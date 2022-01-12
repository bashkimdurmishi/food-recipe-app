import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: SIZES.padding,
  },
  title: {
    flex: 1,
    ...FONTS.h2,
  },
});
