import React, { useEffect } from "react";
import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import {
  CategoryHeader,
  Header,
  SearchBar,
  SeeRecipeCard,
  TrendingRecipes,
  RandomRecipeCard,
} from "../../components/Home";
import { connect } from "react-redux";
import {
  getRandomRecipesAsync,
  getTrendingRecipesAsync,
} from "../../redux/recipes/thunk";
import styles from "../PageContainerStyles";
import BottomStackStyles from "./styles/BottomStackStyles";

interface IHome {
  navigation: any;
  getRandomRecipesAsync: () => void;
  getTrendingRecipesAsync: () => void;
  loading: boolean;
  recipes: any;
}

const Home = (props: IHome) => {
  useEffect(() => {
    props.getRandomRecipesAsync();
    props.getTrendingRecipesAsync();
  }, []);

  if (props.loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerLightGray}>
      <FlatList
        data={props.recipes}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        onRefresh={() => {
          props.getRandomRecipesAsync();
          props.getTrendingRecipesAsync();
        }}
        refreshing={props.loading}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <Header navigation={props.navigation} />
            {/* Search Bar */}
            <SearchBar navigation={props.navigation} />
            {/* See Recipe Card You Haven't Tried*/}
            <SeeRecipeCard navigation={props.navigation} />
            {/* Trending */}
            <TrendingRecipes navigation={props.navigation} />
            {/* Category Header */}
            <CategoryHeader />
          </View>
        }
        renderItem={({ item }) => {
          return (
            <RandomRecipeCard
              containerStyle={BottomStackStyles.randomRecipeContainer}
              categoryItem={item}
              onPress={() =>
                props.navigation.navigate("Recipe", { recipeId: item.id })
              }
            />
          );
        }}
        ListFooterComponent={<View style={BottomStackStyles.footer} />}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  recipes: state.recipes.random_recipes,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {
  getRandomRecipesAsync,
  getTrendingRecipesAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
