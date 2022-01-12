import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  backgroundImage: {
    borderRadius: SIZES.radius,
  },
  categoryContainer: {
    position: "absolute",
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
  categoryText: {
    color: COLORS.white,
    textTransform: "capitalize",
    ...FONTS.h4,
  },
});
