import {
  authErrorObject,
  getAuthErrorData,
  loginUser,
  registerUser,
} from "apifirebase/auth";
import { AuthForm } from "components/Auth/AuthForm";
import { useToggle } from "hooks/useToggle";
import { AuthFormData, AuthFormSchema } from "types/AuthFormData";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // 0 - login, 1 - signup
  const [authMode, toggleAuthMode] = useToggle(false);
  const [submitError, setSubmitError] = useState<authErrorObject | null>(null);

  const redirect = () => {
    navigate("/");
  };

  const handleSubmit = (user: AuthFormData) => {
    try {
      AuthFormSchema.parse(user);

      authMode
        ? registerUser(user, auth)
            .then(redirect)
            .catch((e) => {
              setSubmitError(getAuthErrorData(e));
            })
        : loginUser(user, auth)
            .then(redirect)
            .catch((e) => {
              setSubmitError(getAuthErrorData(e));
            });
    } catch (e) {
      setSubmitError({ cause: "email", message: "Invalid email" });
    }
  };

  return (
    <div className="flex h-96 w-full items-center justify-center">
      <div className="flex w-96 flex-col space-y-3 ">
        {/* auth form depending on mode */}
        <AuthForm
          submitError={submitError}
          authMode={authMode}
          onSubmit={handleSubmit}
        />
        {/* toggle auth mode */}
        <button
          className="text-center text-gray-400 transition-all hover:text-blue-500 hover:transition-all"
          onClick={toggleAuthMode}
        >
          You want to {authMode ? "login" : "sign up"} instead?
        </button>
      </div>
    </div>
  );
};
