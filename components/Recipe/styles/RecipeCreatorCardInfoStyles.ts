import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  labelsContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  recipeByText: {
    color: COLORS.lightGray2,
    ...FONTS.body4,
  },
  authorNameText: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
  rightArrowContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.lightGreen1,
  },
  rightArrowIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.lightGreen1,
  },
  blurViewIos: {
    flex: 1,
    borderRadius: SIZES.radius,
  },
  blurViewAndroid: {
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.transparentBlack9,
  },
});
