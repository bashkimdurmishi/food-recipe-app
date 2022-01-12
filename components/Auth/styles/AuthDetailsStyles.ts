import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  description: {
    marginTop: SIZES.radius,
    width: "70%",
    color: COLORS.gray,
    ...FONTS.body3,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
});
