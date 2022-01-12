import React from "react";
import { View, StatusBar } from "react-native";
import { images } from "../../constants";
// @ts-ignore
import { AuthHeader } from "../../components/Auth";
import AuthForm from "../../components/SignIn/AuthForm";
import styles from "../PageContainerStyles";

const SignIn = (props: any) => {
  return (
    <View style={styles.containerBlack}>
      <StatusBar barStyle="light-content" />
      {/* HEADER */}
      <AuthHeader image={images.nasiLemak} authScreen />
      {/* DETAILS */}
      <AuthForm navigation={props.navigation} signIn />
    </View>
  );
};

export default SignIn;
