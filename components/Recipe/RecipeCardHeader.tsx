import React from "react";
import { Animated, View } from "react-native";
import { RecipeCreatorCardInfo } from "./index";
import RecipeCardHeaderStyles from "./styles/RecipeCardHeaderStyles";

const RecipeCardHeader = (props: any): JSX.Element => {
  const { HEADER_HEIGHT, scrollY, selectedRecipe } = props;
  return (
    <View style={RecipeCardHeaderStyles.container}>
      {/* Background Image */}
      <Animated.Image
        source={{ uri: selectedRecipe?.image }}
        resizeMode="contain"
        style={{
          height: HEADER_HEIGHT,
          width: "200%",
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [2, 1, 0.75],
              }),
            },
          ],
        }}
      />
      {/* Recipe Creator Card */}
      <Animated.View style={RecipeCardHeaderStyles.recipeCreatorCardContainer}>
        <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
      </Animated.View>
    </View>
  );
};

export default RecipeCardHeader;
