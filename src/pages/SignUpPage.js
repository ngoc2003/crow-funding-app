import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/common/button/Button";
import FormGroup from "../components/common/FormGroup";
import { Input } from "../components/common/input";
import { Label } from "../components/common/label";
import LayoutAuthen from "../layouts/LayoutAuthen";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values)
  };
  return (
    <LayoutAuthen heading="Sign Up">
      <p className="mb-8 text-xs font-normal text-text3 lg:text-sm lg:mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>

      <form
        action=""
        className="text-left"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <FormGroup>
          <Label htmlFor={"name"}>Full Name *</Label>
          <Input placeholder="John Doe" control={control} name="name"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor={"email"}>Email *</Label>
          <Input
            placeholder="example@gmail.com"
            control={control}
            name="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor={"password"}>Password *</Label>
          <Input
            placeholder="Create a password"
            control={control}
            name="password"
          ></Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <span className="inline-block w-5 h-5 border rounded border-text4"></span>
          <p className="flex-1 text-sm text-text2">
            I agree to the{" "}
            <span className="underline cursor-pointer text-secondary">
              Terms os Use
            </span>{" "}
            and have read and understand the
            <span className="underline cursor-pointer text-secondary">
              Privacy policy
            </span>{" "}
          </p>
        </div>

        <Button primary  type='submit'>Create my account</Button>
      </form>
    </LayoutAuthen>
  );
};

export default SignUpPage;
