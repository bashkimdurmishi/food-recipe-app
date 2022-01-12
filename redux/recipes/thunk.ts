import axios from "axios";
import { Dispatch } from "redux";
import {
  getRandomRecipes,
  getRandomRecipesSuccess,
  getRandomRecipesError,
  getTrendingRecipes,
  getTrendingRecipesSuccess,
  getTrendingRecipesError,
  getSearchResults,
  getSearchResultsSuccess,
  getSearchResultsError,
  getSelectedRecipe,
  getSelectedRecipeSuccess,
  getSelectedRecipeError,
} from "./actions";
import { API_KEY } from "../../constants";
import areRecipesBookmarked from "../../services/areRecipesBookmarked";
import { IFilterForm } from "../../Typescript/Interfaces/interfaces";
const randomRecipesNumber = 5;
const trendingRecipesNumber = 5;
const searchResultsNumber = 15;

export const getRandomRecipesAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(getRandomRecipes());
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=${randomRecipesNumber}&&apiKey=${API_KEY}`
      )
      .then((response) => {
        dispatch(getRandomRecipesSuccess(response.data.recipes));
      })
      .catch((err) => dispatch(getRandomRecipesError(err)));
  };
};

export const getTrendingRecipesAsync = () => {
  const randomOffset = Math.floor(Math.random() * 100);
  return (dispatch: Dispatch) => {
    dispatch(getTrendingRecipes());
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
        {
          params: {
            number: trendingRecipesNumber,
            sort: "popularity",
            addRecipeInformation: true,
            offset: randomOffset,
          },
        }
      )
      .then((response) => {
        const trendingRecipes = response.data.results;
        return areRecipesBookmarked(trendingRecipes);
      })
      .then((checkedForFavoritesRecipes) => {
        dispatch(getTrendingRecipesSuccess(checkedForFavoritesRecipes));
      })
      .catch((err) => dispatch(getTrendingRecipesError(err)));
  };
};

export const getSearchResultsAsync = (
  term: string,
  filterForm: IFilterForm
) => {
  return (dispatch: Dispatch) => {
    dispatch(getSearchResults());
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
        {
          params: {
            number: searchResultsNumber,
            addRecipeInformation: true,
            sort: filterForm.sort_by == "None" ? null : filterForm.sort_by,
            sortDirection:
              filterForm.sort_type == "None" ? null : filterForm.sort_type,
            type: filterForm.meal_type == "None" ? null : filterForm.meal_type,
            cuisine: filterForm.cuisine == "None" ? null : filterForm.cuisine,
            diet: filterForm.diet == "None" ? null : filterForm.diet,
            titleMatch: term,
          },
        }
      )
      .then((response) => {
        dispatch(getSearchResultsSuccess(response.data.results));
      })
      .catch((err) => dispatch(getSearchResultsError(err)));
  };
};

export const getSelectedRecipeAsync = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(getSelectedRecipe());
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&&apiKey=${API_KEY}`
      )
      .then((response) => {
        const selectedRecipe = response.data;
        const checkedBookmarkRecipe = areRecipesBookmarked(selectedRecipe);
        dispatch(getSelectedRecipeSuccess(checkedBookmarkRecipe));
      })
      .catch((error) => dispatch(getSelectedRecipeError(error)));
  };
};
