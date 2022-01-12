import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconUnderline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
});
