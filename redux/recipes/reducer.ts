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
} from "../action-types";
import ActionRecipes from "../../Typescript/Types/ActionRecipes";
import { IRecipesState } from "../../Typescript/Interfaces/interfaces";
const initial_state = {
  random_recipes: null,
  trending_recipes: null,
  search_results: null,
  selected_recipe: null,
  loading: false,
  error: null,
};

let recipes = (state: IRecipesState = initial_state, action: ActionRecipes) => {
  switch (action.type) {
    case GET_RANDOM_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_RANDOM_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        random_recipes: action.payload,
      };
    case GET_RANDOM_RECIPES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_TRENDING_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        trending_recipes: action.payload,
      };
    case GET_TRENDING_RECIPES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        search_results: null,
        loading: true,
      };
    case SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        search_results: action.payload,
      };
    case SEARCH_RECIPES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SELECTED_RECIPE:
      return {
        ...state,
        loading: true,
        selected_recipe: null,
      };
    case GET_SELECTED_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        selected_recipe: action.payload,
      };
    case GET_SELECTED_RECIPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipes;
