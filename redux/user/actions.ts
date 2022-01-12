import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  //BOOKMARKING
  BOOKMARK,
  BOOKMARK_SUCCESS,
  BOOKMARK_ERROR,
  REMOVE_BOOKMARK,
  REMOVE_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_ERROR,
  //upload Profile Image
  UPLOAD_PROFILE_IMAGE,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_ERROR,
} from "../action-types";
import { IUser } from "../../Typescript/Interfaces/interfaces";

//////==AUTHENTICATION==/////
//SIGN UP
export function signUp() {
  return {
    type: SIGN_UP,
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

export function signUpError(errorMessage: string) {
  return {
    type: SIGN_UP_ERROR,
    payload: errorMessage,
  };
}

//SIGN IN
export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function signInSuccess() {
  return {
    type: SIGN_IN_SUCCESS,
  };
}

export function signInError(errorMessage: string) {
  return {
    type: SIGN_IN_ERROR,
    payload: errorMessage,
  };
}

//LOGOUT
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutError(errorMessage: string) {
  return {
    type: LOGOUT_ERROR,
    payload: errorMessage,
  };
}
/////======DATABASE FUNCTIONS====////
//SAVE TO DB
export function saveUser() {
  return {
    type: SAVE_USER,
  };
}

export function saveUserSuccess(user: IUser) {
  return {
    type: SAVE_USER_SUCCESS,
    payload: user,
  };
}

export function saveUserError(errorMessage: string) {
  return {
    type: SAVE_USER_ERROR,
    payload: errorMessage,
  };
}

//LOAD FROM db
export function loadUser() {
  return {
    type: LOAD_USER,
  };
}

export function loadUserSuccess(user: IUser) {
  return {
    type: LOAD_USER_SUCCESS,
    payload: user,
  };
}

export function loadUserError(errorMessage: string) {
  return {
    type: LOAD_USER_SUCCESS,
    payload: errorMessage,
  };
}

//Update User
export function updateUser() {
  return {
    type: UPDATE_USER,
  };
}

export function updateUserSuccess() {
  return {
    type: UPDATE_USER_SUCCESS,
  };
}

export function updateUserError(errorMessage: string) {
  return {
    type: UPDATE_USER_ERROR,
    payload: errorMessage,
  };
}

//BOOKMARK

export function bookmark() {
  return {
    type: BOOKMARK,
  };
}

export function bookmarkSuccess(bookmarkId: number) {
  return {
    type: BOOKMARK_SUCCESS,
    payload: bookmarkId,
  };
}

export function bookmarkError(errorMessage: string) {
  return {
    type: BOOKMARK_ERROR,
    payload: errorMessage,
  };
}

//REMOVE BOOKMARK

export function removeBookmark() {
  return {
    type: REMOVE_BOOKMARK,
  };
}

export function removeBookmarkSuccess(bookmarkId: number) {
  return {
    type: REMOVE_BOOKMARK_SUCCESS,
    payload: bookmarkId,
  };
}

export function removeBookmarkError(errorMessage: string) {
  return {
    type: REMOVE_BOOKMARK_ERROR,
    payload: errorMessage,
  };
}

//Upload Profile Image
export function uploadProfileImage() {
  return {
    type: UPLOAD_PROFILE_IMAGE,
  };
}

export function uploadProfileImageSuccess(url: string) {
  return {
    type: UPLOAD_PROFILE_IMAGE_SUCCESS,
    payload: url,
  };
}
export function uploadProfileImageError(errorMessage: string) {
  return {
    type: UPLOAD_PROFILE_IMAGE_ERROR,
    payload: errorMessage,
  };
}
