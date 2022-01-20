import React from "react";
import { COLORS } from "../../constants";
import CustomButton from "./CustomButton";
import LoginButtonStyles from "./styles/LoginButtonStyles";
const LoginButton = (props: any): JSX.Element => {
  return (
    <CustomButton
      buttonText="Login"
      colors={[COLORS.darkGreen, COLORS.lime]}
      onPress={props.onPress}
      buttonContainerStyle={LoginButtonStyles.container}
    />
  );
};

export default LoginButton;
