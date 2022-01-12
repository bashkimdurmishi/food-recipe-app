import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  title: {
    ...FONTS.h3,
  },
  picker: {
    width: 140,
  },
});
