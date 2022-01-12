import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SIZES, COLORS, icons, FONTS } from "../../constants";
import SearchBarStyles from "./styles/SearchBarStyles";

const SearchBar = (props: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={SearchBarStyles.container}>
      <View style={SearchBarStyles.itemsContainer}>
        <Image source={icons.search} style={SearchBarStyles.searchIcon} />

        <TextInput
          style={SearchBarStyles.textInput}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipe..."
          onChangeText={(text) => setSearchTerm(text)}
          onSubmitEditing={() => props.onSubmitEditing(searchTerm)}
        ></TextInput>
      </View>

      <TouchableOpacity
        onPress={() => props.setOpenFilters(!props.openFilters)}
        style={SearchBarStyles.filterIconContainer}
      >
        <Image source={icons.filter} style={SearchBarStyles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
