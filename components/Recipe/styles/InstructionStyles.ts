import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stepNumberText: {
    ...FONTS.h3,
  },
  stepInstructionText: {
    ...FONTS.body4,
  },
  smallDot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 1,
    backgroundColor: COLORS.gray,
  },
  bigDOt: {
    height: 6,
    width: 6,
    borderRadius: 3,
    alignSelf: "center",
    marginVertical: 2,
    backgroundColor: COLORS.gray,
  },
});
