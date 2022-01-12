import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import { RandomRecipeCard } from "../../components/Home";
import { SearchHeader, SearchBar } from "../../components/Search";
import FilterMenu from "../../components/Search/FilterMenu";
import SearchResults from "../../components/Search/SearchResults";
import { SIZES } from "../../constants";
import { getSearchResultsAsync } from "../../redux/recipes/thunk";
import styles from "../PageContainerStyles";
import BottomStackStyles from "./styles/BottomStackStyles";

const Search = (props: any) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [filterForm, setFilterForm] = useState({
    cuisine: "None",
    diet: "None",
    meal_type: "None",
    sort_by: "None",
    sort_type: "None",
  });

  const getSearchResults = (term: string) => {
    props.getSearchResultsAsync(term, filterForm);
    setOpenFilters(false);
    setFilterForm({
      cuisine: "None",
      diet: "None",
      meal_type: "None",
      sort_by: "None",
      sort_type: "None",
    });
  };

  useEffect(() => {
    if (props.route.params) {
      let { term } = props.route.params;
      getSearchResults(term);
    }
  }, [props.route.params]);

  return (
    <SafeAreaView style={styles.containerLightGray}>
      <FlatList
        data={props.recipes}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <SearchHeader />
            <SearchBar
              setOpenFilters={setOpenFilters}
              openFilters={openFilters}
              onSubmitEditing={(term: string) => {
                getSearchResults(term);
              }}
            />
            {openFilters && (
              <FilterMenu
                filterForm={filterForm}
                setFilterForm={setFilterForm}
              />
            )}

            <SearchResults navigation={props.navigation} />
          </View>
        }
        renderItem={({ item }) => {
          return (
            <RandomRecipeCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
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
  searchResults: state.recipes.search_results,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {
  getSearchResultsAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
