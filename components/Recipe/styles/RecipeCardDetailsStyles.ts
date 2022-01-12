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
  },
  nameAndBookmarkContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    width: "70%",
    color: COLORS.white,
    marginTop: SIZES.radius,
    ...FONTS.h3,
    fontSize: 18,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    margin: 10,
    marginRight: SIZES.base,
    tintColor: COLORS.darkGreen,
  },
  durationAndServingText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});
