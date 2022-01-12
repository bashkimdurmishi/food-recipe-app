import {
  //Auth
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
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
} from "../../redux/action-types";
import { IUser } from "../Interfaces/interfaces";

interface ISignUp {
  type: typeof SIGN_UP;
}

interface ISignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}

interface ISignUpError {
  type: typeof SIGN_UP_ERROR;
  payload: string;
}

interface ISignIn {
  type: typeof SIGN_IN;
}

interface ISignInSuccess {
  type: typeof SIGN_IN_SUCCESS;
}

interface ISignInError {
  type: typeof SIGN_IN_ERROR;
  payload: string;
}

interface ILoadUser {
  type: typeof LOAD_USER;
}

interface ILoadUserSuccess {
  type: typeof LOAD_USER_SUCCESS;
  payload: IUser;
}

interface ILoadUserError {
  type: typeof LOAD_USER_ERROR;
  payload: string;
}

interface IUpdateUser {
  type: typeof UPDATE_USER;
}

interface IUpdateUserSuccess {
  type: typeof UPDATE_USER_SUCCESS;
}

interface IUpdateUserError {
  type: typeof UPDATE_USER_ERROR;
  payload: string;
}

interface ISaveUser {
  type: typeof SAVE_USER;
}

interface ISaveUserSuccess {
  type: typeof SAVE_USER_SUCCESS;
  payload: IUser;
}

interface ISaveUserError {
  type: typeof SAVE_USER_ERROR;
  payload: string;
}

interface IBookmark {
  type: typeof BOOKMARK;
}

interface IBookmarkSuccess {
  type: typeof BOOKMARK_SUCCESS;
  payload: number;
}

interface IBookmarkError {
  type: typeof BOOKMARK_ERROR;
  payload: string;
}

interface IRemoveBookmark {
  type: typeof REMOVE_BOOKMARK;
}

interface IRemoveBookmarkSuccess {
  type: typeof REMOVE_BOOKMARK_SUCCESS;
  payload: number;
}

interface IRemoveBookmarkError {
  type: typeof REMOVE_BOOKMARK_ERROR;
  payload: string;
}

interface IUploadProfileImage {
  type: typeof UPLOAD_PROFILE_IMAGE;
}

interface IUploadProfileImageSuccess {
  type: typeof UPLOAD_PROFILE_IMAGE_SUCCESS;
  payload: string;
}

interface IUploadProfileImageError {
  type: typeof UPLOAD_PROFILE_IMAGE_ERROR;
  payload: string;
}

interface ILogout {
  type: typeof LOGOUT;
}

interface ILogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

interface ILogoutError {
  type: typeof LOGOUT_ERROR;
  payload: string;
}

type ActionSignUp = ISignUp | ISignUpSuccess | ISignUpError;

type ActionSignIn = ISignIn | ISignInSuccess | ISignInError;

type ActionLoadUser = ILoadUser | ILoadUserSuccess | ILoadUserError;

type ActionUpdateUser = IUpdateUser | IUpdateUserSuccess | IUpdateUserError;

type ActionSaveUser = ISaveUser | ISaveUserSuccess | ISaveUserError;

type ActionBoomark = IBookmark | IBookmarkSuccess | IBookmarkError;

type ActionLogout = ILogout | ILogoutSuccess | ILogoutError;

type ActionUploadProfileImage =
  | IUploadProfileImage
  | IUploadProfileImageSuccess
  | IUploadProfileImageError;

type ActionRemoveBookmark =
  | IRemoveBookmark
  | IRemoveBookmarkSuccess
  | IRemoveBookmarkError;

type ActionUser =
  | ActionSignUp
  | ActionSignIn
  | ActionLoadUser
  | ActionUpdateUser
  | ActionSaveUser
  | ActionBoomark
  | ActionRemoveBookmark
  | ActionUploadProfileImage
  | ActionLogout;

export default ActionUser;
