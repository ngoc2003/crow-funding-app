import React, { useMemo } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReactQuill, { Quill } from "react-quill";
import Button from "../../../components/button/Button";
import FormGroup from "../../../components/common/FormGroup";
import { Label } from "../../../components/label";
import { Input } from "../../../components/input";

let in4 = [
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
    type: "password",
  },
];

const CampaignAddNew = () => {
    const modules = useMemo(
      () => ({
        toolbar: {
          container: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["link", "image"],
            [{ color: ["#FFFFFF", "#e60000"] }],
            ["code-block"],
          ],
          handlers: {
            // image: imageHandlers,
          },
        },
      }),
      []
    );
  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        tags: "",
        author: "Bui Ngoc",
        image: "",
        des: "",
      }}
      validationSchema={Yup.object({
        // categorize: Yup.string().required().oneOf(["Event", "Blog"]),
        title: Yup.string().required("Vui Lòng Điền Trường Này"),
        content: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
        // handleSubmit(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <div>
            {in4 &&
              in4.map((info) => (
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
              ))}
          </div>
        );
      }}
    </Formik>
  );
};

export default CampaignAddNew;
