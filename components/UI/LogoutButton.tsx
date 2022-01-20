import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { ViewStyle } from "react-native";
import LogoutButtonStyles from "./styles/LogoutButtonStyles";
interface ILogoutButton {
  style?: ViewStyle;
  onPress: () => void;
}

const LogoutButton = (props: ILogoutButton): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        ...LogoutButtonStyles.container,
        ...props.style,
      }}
      onPress={() => props.onPress()}
    >
      <Text style={LogoutButtonStyles.text}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
