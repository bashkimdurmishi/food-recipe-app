import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Header, SubmenusContainer } from "../../components/Settings";
import INavigation from "../../Typescript/Interfaces/navigation";
import styles from "../PageContainerStyles";

const Settings = (props: INavigation) => {
  return (
    <View style={styles.containerLightGray}>
      <Header navigation={props.navigation} />
      <SubmenusContainer navigation={props.navigation} />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.data,
  loading: state.user.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
