import {
  //Auth
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  //DB Actions
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  //BOOKMARKS
  BOOKMARK,
  BOOKMARK_SUCCESS,
  BOOKMARK_ERROR,
  REMOVE_BOOKMARK,
  REMOVE_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_ERROR,
  UPLOAD_PROFILE_IMAGE,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  //Upload Profile Image
} from "../action-types";
import ActionUser from "../../Typescript/Types/ActionUser";
import { IUserState } from "../../Typescript/Interfaces/interfaces";

const initial_state = {
  data: null,
  loading: false,
  error: null,
  isSignedIn: false,
};

let user = (state: IUserState = initial_state, action: ActionUser) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // SignUp User
    case SIGN_UP:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Save User To DB
    case SAVE_USER:
      return {
        ...state,
        loading: true,
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isSignedIn: true,
      };
    case SAVE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //SIgnIn User
    case SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };

    //Load User from DB
    case LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isSignedIn: true,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //Update User In db
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initial_state,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //BookmarkRecipe
    case BOOKMARK:
      return {
        ...state,
        loading: true,
      };
    case BOOKMARK_SUCCESS:
      let bookmarkId = action.payload;
      let updatedFavorites = state.data!.favorites.push(bookmarkId);
      return {
        ...state,
        loading: false,
        favorites: updatedFavorites,
      };
    case BOOKMARK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //Remove bookmark
    case REMOVE_BOOKMARK:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_BOOKMARK_SUCCESS:
      let removedBookmarkId = action.payload;
      let updatedFavoritesOnRemove = state.data!;
      console.log(removedBookmarkId);
      updatedFavoritesOnRemove.favorites =
        updatedFavoritesOnRemove.favorites.filter(
          (fav) => fav !== removedBookmarkId
        );
      if (updatedFavoritesOnRemove.favorites == null) {
        updatedFavoritesOnRemove.favorites = [];
      }
      return {
        ...state,
        loading: false,
        data: updatedFavoritesOnRemove,
      };
    case REMOVE_BOOKMARK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //Upload Profile Image
    case UPLOAD_PROFILE_IMAGE:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      let imageUrl = action.payload;
      let userData = state.data!;
      userData.profileImageUrl = imageUrl;
      return {
        ...state,
        loading: false,
        data: userData,
      };
    case UPLOAD_PROFILE_IMAGE_ERROR:
    default:
      return state;
  }
};

export default user;
