// @ts-ignore
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../constants";
import CustomButtonStyles from "./styles/CustomButtonStyles";
interface Props {
  buttonText: any;
  buttonContainerStyle: any;
  colors: any;
  onPress: any;
}

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}: Props): JSX.Element => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text style={CustomButtonStyles.buttonText}>{buttonText}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...buttonContainerStyle,
        }}
      >
        <Text style={CustomButtonStyles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
