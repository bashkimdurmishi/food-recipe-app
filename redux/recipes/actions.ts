import {
  GET_RANDOM_RECIPES,
  GET_RANDOM_RECIPES_SUCCESS,
  GET_RANDOM_RECIPES_ERROR,
  GET_TRENDING_RECIPES,
  GET_TRENDING_RECIPES_SUCCESS,
  GET_TRENDING_RECIPES_ERROR,
  SEARCH_RECIPES,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_ERROR,
  GET_SELECTED_RECIPE,
  GET_SELECTED_RECIPE_SUCCESS,
  GET_SELECTED_RECIPE_ERROR,
} from "../action-types";

// Fetching Random Recipes
export function getRandomRecipes() {
  return {
    type: GET_RANDOM_RECIPES,
  };
}

export function getRandomRecipesSuccess(recipes: string[]) {
  return {
    type: GET_RANDOM_RECIPES_SUCCESS,
    payload: recipes,
  };
}

export function getRandomRecipesError(errorMessage: string) {
  return {
    type: GET_RANDOM_RECIPES_ERROR,
    payload: errorMessage,
  };
}

// Fetching Trending Recipes
export function getTrendingRecipes() {
  return {
    type: GET_TRENDING_RECIPES,
  };
}

export function getTrendingRecipesSuccess(recipes: string[]) {
  return {
    type: GET_TRENDING_RECIPES_SUCCESS,
    payload: recipes,
  };
}

export function getTrendingRecipesError(errorMessage: string) {
  return {
    type: GET_TRENDING_RECIPES_ERROR,
    payload: errorMessage,
  };
}

//Fetching Search Results
export function getSearchResults() {
  return {
    type: SEARCH_RECIPES,
  };
}

export function getSearchResultsSuccess(recipes: string[]) {
  return {
    type: SEARCH_RECIPES_SUCCESS,
    payload: recipes,
  };
}

export function getSearchResultsError(errorMessage: string) {
  return {
    type: SEARCH_RECIPES_ERROR,
    payload: errorMessage,
  };
}

//Fetching Selected Recipe
export function getSelectedRecipe() {
  return {
    type: GET_SELECTED_RECIPE,
  };
}

export function getSelectedRecipeSuccess(recipe: string[]) {
  return {
    type: GET_SELECTED_RECIPE_SUCCESS,
    payload: recipe,
  };
}

export function getSelectedRecipeError(errorMessage: string) {
  return {
    type: GET_SELECTED_RECIPE_ERROR,
    payload: errorMessage,
  };
}
