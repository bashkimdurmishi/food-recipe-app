import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    ...FONTS.body3,
  },
});
