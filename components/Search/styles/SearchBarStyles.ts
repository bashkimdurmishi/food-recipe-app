import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginLeft: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    width: "70%",
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
  filterIconContainer: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SIZES.radius,
    width: 60,
    height: 60,
  },
  filterIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.gray,
  },
});
