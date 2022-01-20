import React from "react";
import { View, Text, Image } from "react-native";
import loadIngredientImage from "../../services/loadIngredientImage";
import IngredientStyles from "./styles/IngredientStyles";

const Ingredient = (props: any): JSX.Element => {
  const item = props.item;
  return (
    <View style={IngredientStyles.container}>
      <View style={IngredientStyles.ingredientImageContainer}>
        <Image
          source={{ uri: loadIngredientImage(item.image) }}
          style={IngredientStyles.ingredientImage}
        />
      </View>

      {/* Description */}
      <View style={IngredientStyles.descriptionContainer}>
        <Text style={IngredientStyles.descriptionText}>
          {item.originalName}
        </Text>
      </View>

      {/* Quantity */}
      <View style={IngredientStyles.quantityContainer}>
        <Text style={IngredientStyles.quantityText}>
          {item.amount} {item.unit}
        </Text>
      </View>
    </View>
  );
};

export default Ingredient;
