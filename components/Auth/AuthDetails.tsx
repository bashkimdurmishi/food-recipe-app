import React from "react";
import { View, Text } from "react-native";
import { LoginButton, SignUpButton } from "../UI";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainNavigatorParamsList } from "../../Typescript/NavigationParamsList";
import LoginDetailsStyles from "./styles/AuthDetailsStyles";

interface IAuthDetails {
  navigation: StackNavigationProp<MainNavigatorParamsList, "Welcome">;
}

const AuthDetails = ({ navigation }: IAuthDetails): JSX.Element => {
  return (
    <View style={LoginDetailsStyles.container}>
      {/* Description */}
      <Text style={LoginDetailsStyles.description}>
        Discover more than 100 recipes in your hands and start cooking easily!
      </Text>
      {/* Buttons */}
      <View style={LoginDetailsStyles.button}>
        {/* Login */}
        <LoginButton
          navigation={navigation}
          onPress={() => {
            navigation.replace("SignIn");
          }}
        />
        {/* Sign up */}
        <SignUpButton
          navigation={navigation}
          onPress={() => navigation.replace("SignUp")}
        />
      </View>
    </View>
  );
};

export default AuthDetails;
