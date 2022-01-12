import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 130,
    width: SIZES.width,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  recipeContainer: {
    flex: 1.5,
    justifyContent: "center",
  },
  titleText: {
    ...FONTS.h2,
  },
  timeAndServingText: {
    marginTop: 5,
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  viewersContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
