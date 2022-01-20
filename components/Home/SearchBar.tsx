import React, { useState } from "react";
import { View, Image, TextInput } from "react-native";
import { COLORS, icons } from "../../constants";
import SearchBarStyles from "./styles/SearchBarStyles";

const SearchBar = (props: any): JSX.Element => {
  const [term, setTerm] = useState("");
  return (
    <View style={SearchBarStyles.container}>
      <Image source={icons.search} style={SearchBarStyles.searchIcon} />

      <TextInput
        style={SearchBarStyles.textInput}
        placeholderTextColor={COLORS.gray}
        placeholder="Search Recipe..."
        value={term}
        onChangeText={(text) => setTerm(text)}
        onSubmitEditing={() => {
          props.navigation.navigate("Search", { term: term });
          setTerm("");
        }}
      />
    </View>
  );
};

export default SearchBar;
