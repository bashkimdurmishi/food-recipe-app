import React from "react";
import {View, Text, ImageBackground} from "react-native";

import {COLORS} from "../../constants";
// @ts-ignore
import {LinearGradient} from "expo-linear-gradient";
import {ImageSourcePropType} from "react-native";
import AuthHeaderStyles from "./styles/AuthHeaderStyles";

interface ILoginHeader {
    image: ImageSourcePropType;
    authScreen?: boolean;
}

const AuthHeader = ({image, authScreen}: ILoginHeader): JSX.Element => {
    return (
        <View style={AuthHeaderStyles.containerBlack}>
            <ImageBackground
                source={image}
                style={AuthHeaderStyles.backgroundImage}
                resizeMode="cover"
            >
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[COLORS.transparent, COLORS.black]}
                    style={AuthHeaderStyles.linearGradient}
                >
                    {!authScreen && (
                        <Text style={AuthHeaderStyles.title}>
                            Cooking Delicious Food Easily
                        </Text>
                    )}
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default AuthHeader;
