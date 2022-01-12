export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: number[];
  profileImageUrl: string;
}

export interface IRecipesState {
  random_recipes: string[] | null;
  trending_recipes: string[] | null;
  search_results: string[] | null;
  selected_recipe: string[] | null;
  loading: boolean;
  error: string | null;
}

export interface IUserState {
  data: IUser | null;
  loading: boolean;
  error: string | null;
  isSignedIn: boolean;
}

export interface IFilterForm {
  cuisine: string;
  diet: string;
  meal_type: string;
  sort_by: string;
  sort_type: string;
}
