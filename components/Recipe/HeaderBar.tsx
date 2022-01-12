import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { COLORS, SIZES, icons } from "../../constants";
import { bookmarkThunk, removeBookmarkThunk } from "../../redux/user/thunk";
import HeaderBarStyles from "./styles/HeaderBarStyles";

const HeaderBar = (props: any) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    setIsBookmarked(
      props.user.favorites?.includes(props.selected_recipe?.id.toString())
    );
  }, [props.selected_recipe]);

  return (
    <View style={HeaderBarStyles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={HeaderBarStyles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Image source={icons.back} style={HeaderBarStyles.backIcon} />
      </TouchableOpacity>

      {/* Bookmark */}
      <TouchableOpacity
        style={HeaderBarStyles.bookmarkButton}
        onPress={() => {
          if (!isBookmarked) {
            props.bookmarkThunk(props.selectedRecipe?.id.toString());
          } else {
            props.removeBookmarkThunk(props.selectedRecipe?.id.toString());
          }
          setIsBookmarked(!isBookmarked);
        }}
      >
        <Image
          source={isBookmarked ? icons.bookmarkFilled : icons.bookmark}
          style={HeaderBarStyles.bookmarkIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user.data,
  selected_recipe: state.recipes.selected_recipe,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {
  bookmarkThunk,
  removeBookmarkThunk,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
