import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { TrendingCard } from "../Home";
import SearchResultsStyles from "./styles/SearchResultsStyles";

const SearchResults = (props: any) => {
  return (
    <View style={SearchResultsStyles.container}>
      {/* Search Result Text */}
      <Text style={SearchResultsStyles.searchResultsText}>
        {props.recipes?.length > 0 ? "Search Results:" : "No Results Found :("}
      </Text>

      {/* Loading Bar */}
      {props.loading && <ActivityIndicator size={50} color="#0000ff" />}

      {/* Results */}
      <FlatList
        data={props.recipes}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return (
            <TrendingCard
              containerStyle={SearchResultsStyles.trendingCard}
              trendingList={false}
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
  recipes: state.recipes.search_results,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
