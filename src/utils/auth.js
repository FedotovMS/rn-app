import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import { clearUserInfo, setUserInfo } from "../redux/reducers/userSlice";

export const authStateChanged = (dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });

  return unsubscribe;
};
