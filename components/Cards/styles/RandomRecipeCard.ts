import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    ...FONTS.h2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.lightGreen1,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: COLORS.lightGreen,
  },
});
