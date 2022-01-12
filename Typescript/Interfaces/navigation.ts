import {
  MainNavigatorParamsList,
  BottomNavigatorParamsList,
} from "../NavigationParamsList";
import { StackNavigationProp } from "@react-navigation/stack";

export interface INavigationWelcome {
  navigation: StackNavigationProp<MainNavigatorParamsList, "Welcome">;
}

export interface INavigationHome {
  navigation: StackNavigationProp<MainNavigatorParamsList, "Home">;
}

export interface INavigationSignIn {
  navigation: StackNavigationProp<MainNavigatorParamsList, "SignIn">;
}

export interface INavigationSignUp {
  navigation: StackNavigationProp<MainNavigatorParamsList, "SignUp">;
}

export interface INavigationRecipe {
  navigation: StackNavigationProp<MainNavigatorParamsList, "Recipe">;
}

export interface INavigationSearch {
  navigation: StackNavigationProp<BottomNavigatorParamsList, "Search">;
}

export interface INavigationMain {
  navigation: StackNavigationProp<BottomNavigatorParamsList, "Main">;
}

export interface INavigationSettings {
  navigation: StackNavigationProp<BottomNavigatorParamsList, "Settings">;
}

type INavigation =
  | INavigationWelcome
  | INavigationHome
  | INavigationSignIn
  | INavigationSignUp
  | INavigationRecipe
  | INavigationSearch
  | INavigationMain
  | INavigationSettings;
export default INavigation;
