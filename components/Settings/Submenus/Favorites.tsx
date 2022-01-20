import {useFocusEffect, useNavigation} from "@react-navigation/native";
import axios, {AxiosResponse} from "axios";
import React, {useCallback, useState} from "react";
import {View, FlatList} from "react-native";
import {connect} from "react-redux";
import {API_KEY} from "../../../constants";
import {RandomRecipeCard} from "../../Home";
import {DropDownWithArrowCard} from "../../Cards";
import FavoritesStyles from "../styles/FavoritesStyles";
import {Navigation} from "../../../Types";
import {IRecipeWithoutSteps} from "../../../Types"

const Favorites = (props: any) => {
    const navigation = useNavigation<Navigation>();
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState<IRecipeWithoutSteps[]>([]);

    const loadedBookmarkedRecipes = async () => {
        let bookmarkedIdList = "";

        props.user?.favorites?.forEach((bookmark: string) => {
            bookmarkedIdList += `${bookmark},`;
        });

        const response = await axios
            .get<IRecipeWithoutSteps[]>(
                `https://api.spoonacular.com/recipes/informationBulk`,
                {
                    params: {
                        ids: bookmarkedIdList,
                        apiKey: API_KEY,
                    },
                }
            )
        if(response.status === 200) {
            setBookmarkedRecipes(response.data);
            console.log(response.data[0].title);
        }

    };

    useFocusEffect(
        useCallback(() => {
            loadedBookmarkedRecipes();
        }, [props.user.favorites])
    );

    return (
        <View style={FavoritesStyles.container}>
            <DropDownWithArrowCard
                title="Favorites"
                style={FavoritesStyles.dropdownIcon}
                renderItem={
                    bookmarkedRecipes.length > 0 && (
                        <View>
                            <FlatList
                                data={bookmarkedRecipes}
                                style={{flexGrow: 0, marginBottom: 20}}
                                renderItem={({item}) => {
                                    return (
                                        <RandomRecipeCard
                                            containerStyle={FavoritesStyles.randomRecipeCard}
                                            key={item.id}
                                            categoryItem={item}
                                            onPress={() =>
                                                navigation.navigate("Recipe", {
                                                    recipeId: item.id,
                                                })
                                            }
                                        />
                                    );
                                }}
                            />
                        </View>
                    )
                }
            />
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    user: state.user.data,
    loading: state.user.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
