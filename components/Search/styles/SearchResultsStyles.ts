import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";
export default StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
  },
  searchResultsText: {
    marginHorizontal: SIZES.padding,
    ...FONTS.h2,
  },
  trendingCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
