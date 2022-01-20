import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../../constants";
import SeeRecipeCardStyles from "./styles/SeeRecipeCardStyles";

const SeeRecipeCard = (props: any): JSX.Element => {
  return (
    <View style={SeeRecipeCardStyles.container}>
      {/* Image */}
      <View style={SeeRecipeCardStyles.recipeIconContainer}>
        <Image source={images.recipe} style={SeeRecipeCardStyles.recipeIcon} />
      </View>

      {/* Text */}
      <View style={SeeRecipeCardStyles.textContainer}>
        <Text style={SeeRecipeCardStyles.normalText}>
          Discover thousands of recipes that you haven't tried
        </Text>

        <TouchableOpacity
          style={SeeRecipeCardStyles.hyperlinkContainer}
          onPress={() => props.navigation.navigate("Search")}
        >
          <Text style={SeeRecipeCardStyles.hyperlinkText}>Discover More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeeRecipeCard;
