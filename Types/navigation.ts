import {StackNavigationProp} from "@react-navigation/stack";

export type MainStackParamList = {
    Welcome: undefined;
    Home: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Recipe: { recipeId: number };
    Main: undefined;
    Search: { term: string | undefined };
    Settings: undefined;
};

export type Navigation = StackNavigationProp<MainStackParamList>
