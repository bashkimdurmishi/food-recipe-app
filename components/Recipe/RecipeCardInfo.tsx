import { BlurView } from "expo-blur";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import RecipeCardDetails from "./RecipeCardDetails";
import RecipeCardDetailsStyles from "./styles/RecipeCardDetailsStyles";
interface RecipeCardInfo {
  recipeItem: any;
}

const RecipeCardInfo = ({ recipeItem }: RecipeCardInfo) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView tint="dark" style={RecipeCardDetailsStyles.container}>
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
  }
  return (
    <View
      style={{
        ...RecipeCardDetailsStyles.container,
        backgroundColor: COLORS.transparentDarkGray,
      }}
    >
      <RecipeCardDetails recipeItem={recipeItem} />
    </View>
  );
};

export default RecipeCardInfo;
