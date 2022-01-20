import { BlurView } from "expo-blur";
import React from "react";
import { View, Text, Platform, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import RecipeCreatorCardInfoStyles from "./styles/RecipeCreatorCardInfoStyles";

const RecipeCardCreatorDetail = ({
  selectedRecipe,
}: {
  selectedRecipe: any;
}): JSX.Element => {
  return (
    <View style={RecipeCreatorCardInfoStyles.container}>
      {/* Profile Photo */}
      <View style={RecipeCreatorCardInfoStyles.profileImageContainer}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={RecipeCreatorCardInfoStyles.profileImage}
        />
      </View>

      {/* Labels */}
      <View style={RecipeCreatorCardInfoStyles.labelsContainer}>
        <Text style={RecipeCreatorCardInfoStyles.recipeByText}>Recipe by:</Text>
        <Text style={RecipeCreatorCardInfoStyles.authorNameText}>
          {selectedRecipe?.sourceName}
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={RecipeCreatorCardInfoStyles.rightArrowContainer}>
        <Image
          source={icons.rightArrow}
          style={RecipeCreatorCardInfoStyles.rightArrowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const RecipeCreatorCardInfo = ({ selectedRecipe }: { selectedRecipe: any }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView tint="dark" style={RecipeCreatorCardInfoStyles.blurViewIos}>
        <RecipeCardCreatorDetail selectedRecipe={selectedRecipe} />
      </BlurView>
    );
  }
  return (
    <View style={RecipeCreatorCardInfoStyles.blurViewAndroid}>
      <RecipeCardCreatorDetail selectedRecipe={selectedRecipe} />
    </View>
  );
};

export default RecipeCreatorCardInfo;
