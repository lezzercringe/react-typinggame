import { AuthFormData } from "types/AuthFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  AuthError,
} from "firebase/auth";

export type authErrorObject = {
  message: string;
  cause: "email" | "password" | "root";
};

export const registerUser = (user: AuthFormData, auth: Auth) =>
  createUserWithEmailAndPassword(auth, user.email, user.password);
export const loginUser = (user: AuthFormData, auth: Auth) =>
  signInWithEmailAndPassword(auth, user.email, user.password);

export const getAuthErrorData = ({ code }: AuthError): authErrorObject => {
  console.log(code);
  switch (code) {
    case "auth/email-already-in-use":
      return { message: "Email already in use", cause: "email" };
    case "auth/invalid-email":
      return { message: "Invalid email", cause: "email" };
    case "auth/user-not-found":
      return { message: "User not found", cause: "root" };
    case "auth/wrong-password":
      return { message: "Invalid password", cause: "password" };
    default:
      return { message: "Unknown error", cause: "root" };
  }
};
