import React from "react";
import { View, Text, ScrollView } from "react-native";
import PageContainerStyles from "../../screens/PageContainerStyles";
import { Favorites } from "./Submenus";
const SubmenusContainer = (props: any) => {
  return (
    <View style={PageContainerStyles.containerLightGray}>
      <Favorites navigation={props.navigation} />
    </View>
  );
};

export default SubmenusContainer;
