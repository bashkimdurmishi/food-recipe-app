import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { COLORS, icons, images } from "../../constants";
import {
  logoutUserAsync,
  uploadProfileImageAsync,
} from "../../redux/user/thunk";
import ProfilePictureCircle from "../UI/ProfilePictureCircle";
import LogoutButton from "../UI/LogoutButton";
import HeaderStyles from "./styles/HeaderStyles";

const Header = (props: any): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    const getBlob = async (imageUri: any) => {
      const response = await fetch(imageUri);
      return response.blob();
    };

    if (!result.cancelled) {
      console.log(result.uri);
      const imgBlob = await getBlob(result.uri);
      await props.uploadProfileImageAsync(result.uri, imgBlob);
    }
  };

  return (
    <View>
      <ImageBackground
        source={images.profileBackground}
        style={HeaderStyles.backgroundImage}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={HeaderStyles.linearGradient}
        >
          {/* Burger Menu */}
          <TouchableOpacity
            style={HeaderStyles.burgerMenuContainer}
            onPress={() => setShowMenu(!showMenu)}
          >
            <Image
              source={icons.burgerMenu}
              style={HeaderStyles.burgerMenuIcon}
            />
          </TouchableOpacity>
          {showMenu && (
            <LogoutButton
              style={{ position: "absolute", left: 287, top: 55 }}
              onPress={() => {
                props.logoutUserAsync(props.navigation);
              }}
            />
          )}
          {/* Profile Picture */}
          <ProfilePictureCircle
            style={HeaderStyles.profilePicture}
            size={130}
            padding={10}
          />

          <TouchableOpacity
            style={HeaderStyles.editIconContainer}
            onPress={pickImage}
          >
            <Image source={icons.edit} style={HeaderStyles.editIcon} />
          </TouchableOpacity>

          {/* FirstName, LastName, Email */}
          <Text style={HeaderStyles.firstAndLastName}>
            {props.user?.firstName} {props.user?.lastName}
          </Text>
          <Text style={HeaderStyles.email}>{props.user?.email}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.data,
  loading: state.user.loading,
});

const mapDispatchToProps = {
  uploadProfileImageAsync,
  logoutUserAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
