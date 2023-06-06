import { authErrorObject } from "apifirebase/auth";
import { Button } from "components/ui/Button";
import { ErrorLabel } from "components/ui/ErrorLabel";
import { Input } from "components/ui/Input";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthFormData } from "types/AuthFormData";

type Props = {
  authMode: boolean;
  submitError: authErrorObject | null;
  onSubmit: (data: AuthFormData) => void;
};

export const AuthForm: FC<Props> = ({ authMode, onSubmit, submitError }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthFormData>();

  useEffect(() => {
    submitError &&
      setError(submitError.cause, { message: submitError.message });
  }, [submitError, setError]);
  return (
    <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col  space-y-3">
        <Input
          name="email"
          placeholder="Email"
          registration={register("email", {
            required: "(*) This field is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.email?.message && (
          <ErrorLabel message={errors.email.message} />
        )}
        <Input
          name="password"
          registration={register("password", {
            required: "(*) This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Password"
        />
        {errors?.password?.message && (
          <ErrorLabel message={errors.password.message} />
        )}
      </div>
      {errors?.root?.message && <ErrorLabel message={errors?.root?.message} />}
      <div className="flex justify-center">
        <Button type="submit" className="w-36" variant="primary">
          {authMode ? "Sign up" : "Sign in"}
        </Button>
      </div>
    </form>
  );
};
