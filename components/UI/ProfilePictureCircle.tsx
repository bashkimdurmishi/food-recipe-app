import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { COLORS, images } from "../../constants";
import ProfilePictureCircleStyles from "./styles/ProfilePictureCircle";

interface IProps {
  size: number;
  padding: number;
  user?: any;
  style?: any;
  loading?: boolean;
}

const ProfilePictureCircle = (props: IProps): JSX.Element => {
  const imageSize = props.size - props.padding;
  return (
    <View
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        ...ProfilePictureCircleStyles.container,
        ...props.style,
      }}
    >
      {props.loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Image
          source={
            props.user?.profileImageUrl
              ? {
                  uri: props.user.profileImageUrl,
                }
              : images.profileImage
          }
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.data,
  loading: state.user.loading,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePictureCircle);
