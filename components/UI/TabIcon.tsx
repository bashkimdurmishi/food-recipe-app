import React from "react";
import { View, Image } from "react-native";
import { COLORS } from "../../constants";
import TabIconStyles from "./styles/TabIconStyles";

interface Icon {
  focused: boolean;
  icon: any;
}

const TabIcon = ({ focused, icon }: Icon): JSX.Element => {
  return (
    <View style={TabIconStyles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          ...TabIconStyles.icon,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
      {focused && <View style={TabIconStyles.iconUnderline} />}
    </View>
  );
};

export default TabIcon;
