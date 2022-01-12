import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { bookmarkThunk, removeBookmarkThunk } from "../../redux/user/thunk";
import RecipeCardDetailsStyles from "./styles/RecipeCardDetailsStyles";

interface RecipeCardDetails {
  recipeItem: any;
}

const RecipeCardDetails = (props: any) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setIsBookmarked(
        props.user.favorites?.includes(props.recipeItem?.id.toString())
      );
    }, [props.user?.favorites])
  );
  return (
    <View style={RecipeCardDetailsStyles.container}>
      {/* Name and Bookmark */}
      <View style={RecipeCardDetailsStyles.nameAndBookmarkContainer}>
        <Text style={RecipeCardDetailsStyles.titleText}>
          {props.recipeItem.title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (
              !props.user.favorites?.includes(props.recipeItem?.id.toString())
            ) {
              props.bookmarkThunk(props.selected_recipe?.id.toString());
            } else {
              props.removeBookmarkThunk(props.selected_recipe?.id.toString());
            }
            setIsBookmarked(!isBookmarked);
          }}
        >
          <Image
            source={isBookmarked ? icons.bookmarkFilled : icons.bookmark}
            style={RecipeCardDetailsStyles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Duration & Serving */}
      <Text style={RecipeCardDetailsStyles.durationAndServingText}>
        {props.recipeItem.readyInMinutes} min | {props.recipeItem.servings}{" "}
        serving
      </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCardDetails);
