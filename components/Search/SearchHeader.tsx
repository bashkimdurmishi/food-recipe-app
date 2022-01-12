import React from "react";
import { View, Text } from "react-native";
import SearchHeaderStyles from "./styles/SearchHeaderStyles";

const HomeHeader = () => {
  return (
    <View style={SearchHeaderStyles.container}>
      {/* Text */}
      <View style={SearchHeaderStyles.textContainer}>
        <Text style={SearchHeaderStyles.text}>
          Find Best Recipe {"\n"}For Cooking
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
