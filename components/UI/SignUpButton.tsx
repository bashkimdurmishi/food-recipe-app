import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../constants";
import CustomButton from "./CustomButton";
import SignUpButtonStyles from "./styles/SignUpButtonStyles";

const SignUpButton = (props: any) => {
  return (
    <CustomButton
      buttonText="Sign Up"
      colors={[]}
      onPress={props.onPress}
      buttonContainerStyle={SignUpButtonStyles.button}
    />
  );
};

export default SignUpButton;
