import React from "react";
import { View, StatusBar } from "react-native";
import { images } from "../../constants";
import { AuthHeader, AuthDetails } from "../../components/Auth";
import styles from "../PageContainerStyles";
import { INavigationWelcome } from "../../Typescript/Interfaces/navigation";

const Welcome = (props: INavigationWelcome) => {
  return (
    <View style={styles.containerBlack}>
      <StatusBar barStyle="light-content" />
      {/* HEADER */}
      <AuthHeader image={images.loginBackground} authScreen={false} />
      {/* DETAILS */}
      <AuthDetails navigation={props.navigation} />
    </View>
  );
};

export default Welcome;
