import React from "react";
import { Text, ScrollView } from "react-native";
import { filters } from "../../constants";
import DropdownItem from "./DropdownItem";
import { getSearchResultsAsync } from "../../redux/recipes/thunk";
import { connect } from "react-redux";
import FilterMenuStyles from "./styles/FilterMenuStyles";
const FilterMenu = (props: any): JSX.Element => {
  const { filterForm, setFilterForm } = props;
  return (
    <ScrollView contentContainerStyle={FilterMenuStyles.container}>
      <Text style={FilterMenuStyles.filtersTitleText}>Filters</Text>

      {/* Cuisine */}
      <DropdownItem
        value={filterForm.cuisine}
        onValueChange={(item: any) =>
          setFilterForm({ ...filterForm, cuisine: item })
        }
        filters={filters.cuisines}
        title="Cuisine"
      />
      {/* Diet */}
      <DropdownItem
        value={filterForm.diet}
        onValueChange={(item: any) =>
          setFilterForm({ ...filterForm, diet: item })
        }
        filters={filters.diets}
        title="Diet"
      />

      {/* Meal Type */}
      <DropdownItem
        value={filterForm.meal_type}
        onValueChange={(item: any) =>
          setFilterForm({ ...filterForm, meal_type: item })
        }
        filters={filters.meal_types}
        title="Meal Type"
      />

      {/* Sort By */}
      <DropdownItem
        value={filterForm.sort_by}
        onValueChange={(item: any) =>
          setFilterForm({ ...filterForm, sort_by: item })
        }
        filters={filters.sort_by}
        title="Sort By"
      />

      {/* Sort Type */}
      <DropdownItem
        value={filterForm.sort_by}
        onValueChange={(item: any) =>
          setFilterForm({ ...filterForm, sort_type: item })
        }
        filters={filters.sort_type}
        title="Sort Type"
      />
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({
  searchResults: state.recipes.search_results,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {
  getSearchResultsAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
