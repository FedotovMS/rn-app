import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config";

export const registerDB = createAsyncThunk(
  "auth/signup",
  async ({ inputEmail, inputPassword, inputLogin }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);

      await updateProfile(auth.currentUser, {
        displayName: inputLogin,
      });

      const { email, displayName, uid } = auth.currentUser;

      await setDoc(doc(db, "users", uid), {
        email: email,
        displayName: displayName,
        userId: uid,
      });

      return { email, displayName, userId: uid };
    } catch (error) {
      console.error("SIGNUP ERROR:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginDB = createAsyncThunk(
  "auth/login",
  async ({ inputEmail, inputPassword }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
      const { uid } = auth.currentUser;

      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          email: userData.email,
          displayName: userData.displayName,
          userId: userData.userId,
        };
      } else {
        throw new Error("User data not found in Firestore.");
      }
    } catch (error) {
      console.log("SIGNIN ERROR:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutDB = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return {};
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
