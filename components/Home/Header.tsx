import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ProfilePictureCircle from "../UI/ProfilePictureCircle";
import HeaderStyles from "./styles/HeaderStyles";
const Header = (props: any): JSX.Element => {
  return (
    <View style={HeaderStyles.container}>
      {/* Text */}
      <View style={HeaderStyles.headerContainer}>
        <Text style={HeaderStyles.headerText}>
          Hello there {props.user?.firstName},
        </Text>

        <Text style={HeaderStyles.text}>What do you want to cook today?</Text>
      </View>

      {/* Profile Image */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Settings");
        }}
      >
        <ProfilePictureCircle size={60} padding={10} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.data,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
