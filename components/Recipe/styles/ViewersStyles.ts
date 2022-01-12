import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  viewerCircle: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 100,
    borderRadius: 25,
    backgroundColor: COLORS.darkGreen,
  },
  viewerNumberText: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  alreadyTriedThisText: {
    color: COLORS.lightGray2,
    textAlign: "right",
    ...FONTS.body4,
    lineHeight: 18,
  },
});
