import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CategoryHeaderStyles from "./styles/CategoryHeaderStyles";
const CategoryHeader = (): JSX.Element => {
  return (
    <View style={CategoryHeaderStyles.container}>
      {/* Section Title */}
      <Text style={CategoryHeaderStyles.title}>Random Recipes</Text>
    </View>
  );
};

export default CategoryHeader;
