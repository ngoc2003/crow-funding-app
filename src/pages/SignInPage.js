// import { set } from "lodash";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthen from "../layouts/LayoutAuthen";
import * as Yup from "yup";
import IconEyeToggle from "../components/icons";
import useToggleValue from "../hooks/useToggleValue";
import Button from "../components/common/Button";

export default function SignInPage() {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);

  const infos = [
    {
      name: "email",
      label: "Email address *",
      placeholder: "example@gmail.com",
    },
    {
      name: "password",
      label: "Password *",
      placeholder: "Type your own password here",
      icon: true,
    },
  ];
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
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
      {({ errors, touched, setFieldValue }) => (
        <LayoutAuthen heading="Welcome Back!">
          <p className="mb-8 text-xs font-normal text-text3 lg:text-sm lg:mb-6">
            Dont have an account?{" "}
            <Link to="/sign-up" className="font-medium underline text-primary">
              Sign up
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
                    icon={info?.icon}
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
            <Button fluid primary type='submit'>
              Create my account
            </Button>
          </Form>
        </LayoutAuthen>
      )}
    </Formik>
  );
}
