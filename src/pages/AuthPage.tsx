import { AuthForm } from "components/Auth/AuthForm";
import { useToggle } from "hooks/useToggle";

export const AuthPage = () => {
  const [authMode, toggleAuthMode] = useToggle(false);
  // 0 - login, 1 - signup

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-96 flex-col space-y-3">
        {/* auth form depending on mode */}
        <AuthForm
          authMode={authMode}
          onSubmit={(e) => {
            console.log(e);
          }}
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
