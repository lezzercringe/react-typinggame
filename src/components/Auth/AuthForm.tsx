import { Button } from "components/ui/Button";
import { ErrorLabel } from "components/ui/ErrorLabel";
import { Input } from "components/ui/Input";
import { FC } from "react";
import { useForm } from "react-hook-form";

type AuthFormData = {
  login: string;
  password: string;
};

type Props = {
  authMode: boolean;
  onSubmit: (data: AuthFormData) => void;
};

export const AuthForm: FC<Props> = ({ authMode, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>();

  return (
    <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col  space-y-3">
        <Input
          name="login"
          placeholder="Login"
          registration={register("login", {
            required: "(*) This field is required",
          })}
        />
        {errors?.login?.message && (
          <ErrorLabel message={errors.login.message} />
        )}
        <Input
          name="password"
          registration={register("password", {
            required: "(*) This field is required",
          })}
          placeholder="Password"
        />
        {errors?.password?.message && (
          <ErrorLabel message={errors.password.message} />
        )}
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="w-36" variant="primary">
          {authMode ? "Sign up" : "Sign in"}
        </Button>
      </div>
    </form>
  );
};
