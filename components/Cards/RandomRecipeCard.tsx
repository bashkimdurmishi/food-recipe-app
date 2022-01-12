import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants";

interface IRandomRecipeCard {
  containerStyle?: any;
  categoryItem: any;
  onPress?: () => void;
}

const RandomRecipeCard = ({
  containerStyle,
  categoryItem,
  onPress,
}: IRandomRecipeCard) => {
  const path = "../../assets/images/recipes";
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={{ uri: categoryItem?.image }}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />

      {/* Details */}
      <View
        style={{
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        {/* Name */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}
        >
          {categoryItem?.title}
        </Text>
        {/* Servings */}
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {categoryItem?.readyInMinutes} min | {categoryItem?.servings}{" "}
          {categoryItem?.serving === 1 ? "serving" : "servings"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RandomRecipeCard;
