import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import RecipeInfoStyles from "./styles/RecipeInfoStyles";
import Viewers from "./Viewers";
const RecipeInfo = (props: any): JSX.Element => {
  return (
    <View style={RecipeInfoStyles.container}>
      {/* Recipe */}
      <View style={RecipeInfoStyles.recipeContainer}>
        <Text style={RecipeInfoStyles.titleText}>
          {props.selectedRecipe?.title}
        </Text>
        <Text style={RecipeInfoStyles.timeAndServingText}>
          {props.selectedRecipe?.readyInMinutes} Minutes |{" "}
          {props.selectedRecipe?.servings} Servings
        </Text>
      </View>
      {/* Viewers */}
      <View style={RecipeInfoStyles.viewersContainer}>
        <Viewers viewersList={props.selectedRecipe?.aggregateLikes} />
      </View>
    </View>
  );
};

export default RecipeInfo;
