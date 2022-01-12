import {
  loadUser,
  loadUserSuccess,
  loadUserError,
  signUp,
  signUpSuccess,
  signUpError,
  logout,
  logoutSuccess,
  logoutError,
  saveUser,
  saveUserSuccess,
  saveUserError,
  updateUser,
  updateUserSuccess,
  updateUserError,
  signIn,
  signInSuccess,
  signInError,
  bookmark,
  bookmarkSuccess,
  bookmarkError,
  removeBookmark,
  removeBookmarkSuccess,
  removeBookmarkError,
  uploadProfileImage,
  uploadProfileImageError,
  uploadProfileImageSuccess,
} from "./actions";
import db, { auth } from "../../firebase/firebase";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Auth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import User from "../../models/User";
import store from "../../store";
import { Dispatch } from "redux";
import { IUser } from "../../Typescript/Interfaces/interfaces";

let user: IUser;
let bookmarkId: number;
export const signUpAsync = (
  auth: Auth,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  navigation: any
) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(signUp());
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(signUpSuccess());
        user = JSON.parse(
          JSON.stringify(
            new User(res.user.uid, firstName, lastName, email, [], "")
          )
        );
        return user;
      })
      .then((user) => {
        dispatch(loadUserSuccess(user));
        navigation.navigate("Home");
      })
      .then(() => {
        dispatch(saveUserToDbAsync(user));
      })
      .catch((err) => {
        console.log(err);
        signUpError(err);
      });
  };
};

export const saveUserToDbAsync = (user: IUser) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(saveUser());
    const docRef = doc(db, "users", `${user.id}`);
    setDoc(docRef, user)
      .then(() => {
        dispatch(saveUserSuccess(user));
      })
      .catch((err) => {
        saveUserError(err);
        console.log(err);
      });
  };
};

export const signInAsync = (
  auth: Auth,
  email: string,
  password: string,
  navigation: any
) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(signIn());
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(signInSuccess());
        dispatch(loadUserFromDb(res.user.uid, navigation));
      })
      .catch((err) => {
        signInError(err);
      });
  };
};

export const loadUserFromDb = (id: string, navigation: any) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loadUser());
    const docRef = doc(db, "users", `${id}`);
    getDoc(docRef)
      .then((res) => {
        const resData = res.data();
        return resData;
      })
      .then((resData) => {
        const parsedUser = new User(
          resData!.id,
          resData!.firstName,
          resData!.lastName,
          resData!.email,
          resData!.favorites,
          resData!.profileImageUrl
        );
        dispatch(loadUserSuccess(parsedUser));
      })
      .then(() => {
        navigation.replace("Home");
      })
      .catch((err) => {
        dispatch(loadUserError(err));
      });
  };
};

export const bookmarkThunk = (recipeId: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(bookmark());
    try {
      dispatch(bookmarkSuccess(recipeId));
      dispatch(updateUserAsync());
    } catch (err: any) {
      console.log(err);
      dispatch(bookmarkError(err));
    }
  };
};

export const removeBookmarkThunk = (recipeId: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(removeBookmark());
    try {
      dispatch(removeBookmarkSuccess(recipeId));
      dispatch(updateUserAsync());
    } catch (err: any) {
      console.log(err);
      dispatch(removeBookmarkError(err));
    }
  };
};

//////Update User To DB on user data changes
export const updateUserAsync = () => {
  const updatedUser = JSON.parse(JSON.stringify(store.getState().user.data));
  console.log("updatedUser", updatedUser);
  const docRef = doc(db, "users", `${updatedUser.id}`);
  console.log("UpdatingUser");
  return (dispatch: Dispatch<any>) => {
    dispatch(updateUser());
    updateDoc(docRef, updatedUser)
      .then(() => {
        dispatch(updateUserSuccess());
      })
      .catch((err) => {
        dispatch(updateUserError(err));
      });
  };
};

//Upload Profile Image to DB
export const uploadProfileImageAsync = (fileUri: string, fileBlob: Blob) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(uploadProfileImage());
    const fileName = fileUri.split("ImagePicker/").pop();
    const storage = getStorage();
    const storageRef = ref(storage, `/profileImages/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, fileBlob);

    uploadTask.on(
      "state_changed",
      () => {},
      (err) => {
        dispatch(uploadProfileImageError(err.message));
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log("url is", url);
            dispatch(uploadProfileImageSuccess(url));
          })
          .then(() => dispatch(updateUserAsync()));
      }
    );
  };
};

//SIGN OUT USER
export const logoutUserAsync = (navigation: any) => {
  return (dispatch: Dispatch) => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        navigation.navigate("Welcome");
      })
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((err) => {
        dispatch(logoutError(err));
      });
  };
};
