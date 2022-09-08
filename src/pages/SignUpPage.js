import { set } from "lodash";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import Button from "../components/common/button/Button";
import Checkbox from "../components/common/checkbox/Checkbox";
import FormGroup from "../components/common/FormGroup";
import { Input } from "../components/common/input";
import { Label } from "../components/common/label";
import LayoutAuthen from "../layouts/LayoutAuthen";
import * as Yup from "yup";
import IconEyeToggle from "../components/common/icons";
import useToggleValue from "../hooks/useToggleValue";

const SignUpPage = () => {
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);

  const infos = [
    {
      name: "name",
      label: "Full name *",
      placeholder: "John Doe",
      type: "text",
    },
    {
      name: "email",
      label: "Email address *",
      placeholder: "example@gmail.com",
      type: "email",
    },
    {
      name: "password",
      label: "Password *",
      placeholder: "Type your own password here",
      type: showPassword ? "text" : "password",
      icon: (
        <IconEyeToggle
          toggle={showPassword}
          onClick={handleTogglePassword}
        ></IconEyeToggle>
      ),
    },
  ];

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required!"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required!"),
        password: Yup.string()
          .required("This field is required!")
          .min(8, "Password must at least 8 char"),
      })}
      onSubmit={(values) => {
        console.log("Submit: ", values);
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting, setFieldValue }) => (
        <LayoutAuthen heading="Sign Up">
          <p className="mb-8 text-xs font-normal text-text3 lg:text-sm lg:mb-6">
            Already have an account?{" "}
            <Link to="/sign-in" className="font-medium underline text-primary">
              Sign in
            </Link>
          </p>

          <Form className="text-left">
            {infos.map((info) => {
              return (
                <FormGroup key={info.name}>
                  <Label>{info.label}</Label>
                  <Input
                    name={info.name}
                    placeholder={info.placeholder}
                    type={info.type}
                    error={
                      errors[info.name] && touched[info.name]
                        ? errors[info.name]
                        : ""
                    }
                    onChange={(e) => setFieldValue(info.name, e.target.value)}
                  >
                    {info.icon ? info.icon : ""}
                  </Input>
                </FormGroup>
              );
            })}
            <div className="flex items-start mb-5 gap-x-5">
              <Checkbox
                name="term"
                checked={acceptTerm}
                onClick={handleToggleTerm}
              >
                <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
                  I agree to the{" "}
                  <span className="underline cursor-pointer text-secondary">
                    Terms os Use
                  </span>{" "}
                  and have read and understand the{" "}
                  <span className="underline cursor-pointer text-secondary">
                    Privacy policy
                  </span>{" "}
                </p>
              </Checkbox>
            </div>

            <Button primary type="submit">
              Create my account
            </Button>
          </Form>
        </LayoutAuthen>
      )}
    </Formik>
  );
};

export default SignUpPage;
