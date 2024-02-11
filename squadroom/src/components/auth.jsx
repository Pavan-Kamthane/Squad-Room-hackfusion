import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    // redirect to registration page
    window.location.replace("/signup");
  } catch (err) {
    console.err(err);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    window.location.replace("/login");
  } catch (err) {
    console.err(err);
  }
};
