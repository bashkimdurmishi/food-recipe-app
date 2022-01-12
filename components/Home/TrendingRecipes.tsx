import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { SIZES } from "../../constants";
import { TrendingCard } from "../Cards";
import TrendingRecipesStyles from "./styles/TrendingRecipesStyles";

const TrendingRecipes = (props: any) => {
  return (
    <View style={TrendingRecipesStyles.container}>
      <Text style={TrendingRecipesStyles.title}>Trending Recipes</Text>

      <FlatList
        data={props.recipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TrendingCard
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : 0,
              }}
              trendingList
              recipeItem={item}
              onPress={() => {
                props.navigation.navigate("Recipe", { recipeId: item.id });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  recipes: state.recipes.trending_recipes,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingRecipes);
