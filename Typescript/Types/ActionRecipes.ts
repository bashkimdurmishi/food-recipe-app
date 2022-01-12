import {
  GET_TRENDING_RECIPES,
  GET_TRENDING_RECIPES_SUCCESS,
  GET_TRENDING_RECIPES_ERROR,
  GET_RANDOM_RECIPES,
  GET_RANDOM_RECIPES_SUCCESS,
  GET_RANDOM_RECIPES_ERROR,
  SEARCH_RECIPES,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_ERROR,
  GET_SELECTED_RECIPE,
  GET_SELECTED_RECIPE_SUCCESS,
  GET_SELECTED_RECIPE_ERROR,
} from "../../redux/action-types";

interface IGetRandomRecipes {
  type: typeof GET_RANDOM_RECIPES;
}

interface IGetRandomRecipesSuccess {
  type: typeof GET_RANDOM_RECIPES_SUCCESS;
  payload: string[];
}

interface IGetRandomRecipesError {
  type: typeof GET_RANDOM_RECIPES_ERROR;
  payload: string;
}

interface IGetTrendingRecipes {
  type: typeof GET_TRENDING_RECIPES;
}

interface IGetTrendingmRecipesSuccess {
  type: typeof GET_TRENDING_RECIPES_SUCCESS;
  payload: string[];
}

interface IGetTrendingRecipesError {
  type: typeof GET_TRENDING_RECIPES_ERROR;
  payload: string;
}

interface ISearchRecipes {
  type: typeof SEARCH_RECIPES;
}

interface ISearchRecipesSuccess {
  type: typeof SEARCH_RECIPES_SUCCESS;
  payload: string[];
}

interface ISearchRecipesError {
  type: typeof SEARCH_RECIPES_ERROR;
  payload: string;
}

interface IGetSelectedReciped {
  type: typeof GET_SELECTED_RECIPE;
}

interface IGetSelectedRecipedSuccess {
  type: typeof GET_SELECTED_RECIPE_SUCCESS;
  payload: string[];
}

interface IGetSelectedRecipedError {
  type: typeof GET_SELECTED_RECIPE_ERROR;
  payload: string;
}

type ActionGetRandomRecipes =
  | IGetRandomRecipes
  | IGetRandomRecipesSuccess
  | IGetRandomRecipesError;

type ActionGetTrendingRecipes =
  | IGetTrendingRecipes
  | IGetTrendingmRecipesSuccess
  | IGetTrendingRecipesError;

type ActionGetSelectedRecipe =
  | IGetSelectedReciped
  | IGetSelectedRecipedSuccess
  | IGetSelectedRecipedError;

type ActionSearchRecipes =
  | ISearchRecipes
  | ISearchRecipesSuccess
  | ISearchRecipesError;

type ActionRecipes =
  | ActionGetRandomRecipes
  | ActionGetTrendingRecipes
  | ActionGetSelectedRecipe
  | ActionSearchRecipes;

export default ActionRecipes;
