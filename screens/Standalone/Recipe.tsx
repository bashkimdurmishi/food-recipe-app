import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { SIZES } from "../../constants";
import RenderHtml from "react-native-render-html";
import RecipeCardHeader from "../../components/Recipe/RecipeCardHeader";
import HeaderBar from "../../components/Recipe/HeaderBar";
import RecipeInfo from "../../components/Recipe/RecipeInfo";
import Instruction from "../../components/Recipe/Instruction";
import { getSelectedRecipeAsync } from "../../redux/recipes/thunk";
import { connect } from "react-redux";
import Ingredient from "../../components/Recipe/Ingredient";
import DropDownWithArrowCard from "../../components/Cards/DropDownWithArrowCard";
import styles from "../PageContainerStyles";
interface Recipe {
  navigation: {
    goBack: () => void;
  };
  route: {
    params: {
      recipe: any;
    };
  };
}

const Recipe = (props: any) => {
  const { navigation, route } = props;
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_HEIGHT = 350;

  useEffect(() => {
    let { recipeId } = route.params;
    props.getSelectedRecipeAsync(recipeId);
  }, []);

  return (
    <View style={styles.containerWhite}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View>
          {/* Header includes bg image and author */}
          <RecipeCardHeader
            HEADER_HEIGHT={HEADER_HEIGHT}
            scrollY={scrollY}
            selectedRecipe={props.selected_recipe}
          />
          {/* Recipe title and info */}
          <RecipeInfo selectedRecipe={props.selected_recipe} />
          <View
            style={{
              width: SIZES.width,
              paddingHorizontal: 5,
            }}
          >
            {/* Render Description */}
            <DropDownWithArrowCard
              title="Description"
              renderItem={
                <RenderHtml
                  contentWidth={100}
                  source={{
                    html: props.selected_recipe?.summary.replace(
                      /<[^>]+>/g,
                      ""
                    ),
                  }}
                  enableExperimentalMarginCollapsing={true}
                />
              }
            />

            {/* Render Ingredients */}
            <DropDownWithArrowCard
              title="Ingredients"
              renderItem={props.selected_recipe?.extendedIngredients?.map(
                (item: any, index: number) => {
                  return <Ingredient item={item} key={index} />;
                }
              )}
            />

            {/* Render Instructions */}
            <DropDownWithArrowCard
              title="Instructions"
              renderItem={props.selected_recipe?.analyzedInstructions[0]?.steps?.map(
                (instruction: any) => {
                  return (
                    <Instruction
                      instruction={instruction}
                      key={instruction.id}
                    />
                  );
                }
              )}
            />
          </View>
        </View>
      </Animated.ScrollView>

      {/* Header Bar */}
      <HeaderBar
        navigation={navigation}
        selectedRecipe={props.selected_recipe}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  selected_recipe: state.recipes.selected_recipe,
  loading: state.recipes.loading,
});

const mapDispatchToProps = {
  getSelectedRecipeAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
