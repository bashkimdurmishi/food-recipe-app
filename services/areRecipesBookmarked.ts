import store from "../store";

const areRecipesBookmarked = (recipes: any) => {
  let user = store.getState().user;
  if (recipes.length > 0) {
    recipes.forEach((recipe: any) => {
      return assignIsBookmarked(user.data!.favorites, recipe);
    });
  } else {
    return assignIsBookmarked(user.data!.favorites, recipes);
  }
  return recipes;
};

const assignIsBookmarked = (favorites: number[], recipe: any) => {
  if (favorites && favorites.includes(recipe.id.toString())) {
    recipe.isBookmark = true;
  } else {
    recipe.isBookmark = false;
  }
  return recipe;
};
export default areRecipesBookmarked;
