import React, { useEffect, useState } from "react";
import { SignIn, SignUp } from "./screens/Authentication";
import { Welcome } from "./screens/Authentication";
import { Recipe } from "./screens/Standalone";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import Test from "./components/Test";
import { Provider } from "react-redux";
import store from "./store";
import loadFonts from "./services/loadFonts";
import { ActivityIndicator } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts(setFontsLoaded);
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Welcome"}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
