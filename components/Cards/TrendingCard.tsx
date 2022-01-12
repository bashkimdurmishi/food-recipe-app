import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RecipeCardInfo } from "../Recipe";
import TrendingCardStyles from "./styles/TrendingCardStyles";
interface TrendingCard {
  containerStyle: any;
  recipeItem: any;
  onPress: any;
  trendingList: any | undefined;
}

const TrendingCard = ({
  containerStyle,
  recipeItem,
  onPress,
  trendingList,
}: TrendingCard) => {
  return (
    <TouchableOpacity
      style={{
        height: trendingList ? 350 : 250,
        width: trendingList ? 250 : "100%",
        ...TrendingCardStyles.container,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Background Image */}
      <Image
        source={{ uri: recipeItem.image }}
        resizeMode="cover"
        style={{
          width: trendingList ? 250 : "100%",
          height: trendingList ? 350 : 250,
          ...TrendingCardStyles.backgroundImage,
        }}
      />

      {/* Category */}
      {recipeItem.cuisines.length > 0 && (
        <View style={TrendingCardStyles.categoryContainer}>
          <Text style={TrendingCardStyles.categoryText}>
            {recipeItem.cuisines[0]}
          </Text>
        </View>
      )}

      {/* Card Info */}
      {/* Blur */}
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

export default TrendingCard;
