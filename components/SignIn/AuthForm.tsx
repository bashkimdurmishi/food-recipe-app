import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";
import { LoginButton, SignUpButton } from "../UI";
import { auth } from "../../firebase/firebase";

import { signInAsync, signUpAsync } from "../../redux/user/thunk";
import { connect } from "react-redux";

const AuthForm = (props: any) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("bashkim1234@yahoo.com");
  const [password, setPassword] = useState("bachi123B");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: SIZES.padding,
        marginTop: -160,
      }}
    >
      <Text
        style={{
          color: COLORS.lightGreen1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: 30,
          ...FONTS.largeTitle,
        }}
      >
        {props.signIn ? "Sign In" : "Sign Up"}
      </Text>
      {/* FIrst and Last Name */}

      {!props.signIn && (
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={styles.firstAndLastName}
            value={firstName}
            placeholderTextColor={COLORS.black}
            placeholder="First Name"
            onChangeText={(text) => setFirstName(text)}
          ></TextInput>
          <TextInput
            style={styles.firstAndLastName}
            value={lastName}
            placeholderTextColor={COLORS.black}
            placeholder="Last Name"
            onChangeText={(text) => setLastName(text)}
          ></TextInput>
        </View>
      )}
      {/* Email and Password */}
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={email}
          placeholderTextColor={COLORS.black}
          placeholder="E-mail..."
          onChangeText={(text) => setEmail(text)}
        ></TextInput>

        <TextInput
          style={styles.input}
          value={password}
          placeholderTextColor={COLORS.black}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
            console.log(password);
          }}
        ></TextInput>
      </View>
      {/* Login Button */}
      {props.signIn ? (
        <LoginButton
          onPress={() =>
            props.signInAsync(auth, email, password, props.navigation)
          }
        />
      ) : (
        <SignUpButton
          onPress={() =>
            props.signUpAsync(
              auth,
              email,
              password,
              firstName,
              lastName,
              props.navigation
            )
          }
        />
      )}
      {/* Suggestion */}
      <View style={styles.suggestion}>
        <Text style={styles.suggestionText}>
          {props.signIn ? "Don't have an account?" : "Already have an account?"}{" "}
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
          onPress={() =>
            props.signIn
              ? props.navigation.navigate("SignUp")
              : props.navigation.navigate("SignIn")
          }
        >
          <Text
            style={{
              color: COLORS.darkGreen,
              textDecorationLine: "underline",
              ...FONTS.h4,
            }}
          >
            {props.signIn ? "Register" : "Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: COLORS.lightLime,
    opacity: 0.9,
    borderRadius: SIZES.radius,
    color: COLORS.black,
    ...FONTS.body3,
  },
  inputBox: {},
  suggestion: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  suggestionText: {
    color: COLORS.lightGray,
  },
  firstAndLastName: {
    height: 50,
    width: "48%",
    backgroundColor: COLORS.lightLime,
    opacity: 0.9,
    borderRadius: SIZES.radius,
    color: COLORS.black,
    paddingLeft: 15,
    ...FONTS.body3,
  },
});
const mapStateToProps = (state: any) => ({
  user: state.user.data,
  loading: state.user.loading,
});

const mapDispatchToProps = {
  signUpAsync,
  signInAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
