import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 300,
  },
  linearGradient: {
    height: 300,
    paddingHorizontal: SIZES.padding,
    flexDirection: "column",
    alignItems: "center",
  },
  burgerMenuContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    opacity: 0.9,
    alignSelf: "flex-end",
    backgroundColor: COLORS.lightGray,
  },
  burgerMenuIcon: {
    width: 30,
    height: 30,
  },
  logoutButton: {
    position: "absolute",
    left: 287,
    top: 55,
  },
  profilePicture: {
    marginTop: 20,
  },
  editIconContainer: {
    position: "absolute",
    left: 230,
    top: 150,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    opacity: 0.7,
    margin: 20,
    alignSelf: "flex-end",
    backgroundColor: COLORS.lightGray,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  firstAndLastName: {
    marginTop: 20,
    color: COLORS.white,
    ...FONTS.h3,
  },
  email: {
    color: COLORS.lightGray,
    opacity: 0.7,
    ...FONTS.body4,
  },
});
