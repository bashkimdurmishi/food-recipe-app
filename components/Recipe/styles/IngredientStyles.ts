import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingHorizontal: 5,
  },
  ingredientImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  ingredientImage: {
    height: 40,
    width: 40,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  descriptionText: {
    textTransform: "capitalize",
    ...FONTS.body3,
  },
  quantityContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  quantityText: {
    ...FONTS.body3,
  },
});
