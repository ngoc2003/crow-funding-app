import React, { useMemo, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReactQuill, { Quill } from "react-quill";
import FormGroup from "../../../components/common/FormGroup";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import "antd/dist/antd.css";
import Heading2 from "../../../components/common/Heading2";
import Textarea from "../../../components/common/Textarea";
import ImageUploader from "quill-image-uploader";
import { axios } from "axios";
import DropdownInput from "../../../components/dropdown/DropdownInput";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [category, setCategory] = useState("");
  const categories = [
    {
      label: "Architecture",
      key: "Architecture",
    },
    {
      label: "Crypto",
      key: "Crypto",
    },
  ];
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
        imageUploader: {
          upload: async (file) => {
            // const bodyFormData = new FormData();
            // bodyFormData.append("image", file);
            // const response = await axios({
            //   method: "post",
            //   url: "",
            //   data: "bodyFormData",
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // });
            // return response.data.data.url;
          },
        },
      },
    }),
    []
  );
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        category: "",
        story: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Vui Lòng Điền Trường Này"),
        story: Yup.string().required("Vui Lòng Điền Trường Này"),
        description: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <div className="text-center">
            <Heading2>Start a Campaign</Heading2>
            <div className="flex gap-8 ">
              <FormGroup className="flex-1">
                <Label>Campaign title</Label>
                <Input
                  name="title"
                  placeholder="Write a title *"
                  error={errors.title && touched.title ? errors.title : ""}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                ></Input>
              </FormGroup>
              <FormGroup className="flex-1">
                <Label>Select a category *</Label>
                <DropdownInput
                  setItem={setCategory}
                  data={categories}
                  item={category}
                  name="category"
                ></DropdownInput>
              </FormGroup>
            </div>
            <FormGroup>
              <Label>Short Description *</Label>
              <Textarea
                name="description"
                placeholder="Write a short description"
                error={
                  errors.description && touched.description ? errors.title : ""
                }
                onChange={(e) => setFieldValue("description", e.target.value)}
              ></Textarea>
            </FormGroup>
            <FormGroup>
              <Label>Story *</Label>
              <ReactQuill
                modules={modules}
                placeholder="Write your story"
                className="border outline-none hover:border-blue-400 durration-200"
                theme="snow"
                onChange={(e) => setFieldValue("story", e.target.value)}
              ></ReactQuill>
            </FormGroup>
            <div className="flex">
              <div className="flex-1">
                <FormGroup>
                  <Label>Goal *</Label>
                  <Input placeholder="$0.00 USD"></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Amount Prefilled</Label>
                  <Input placeholder="Amount Prefilled"></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Campaign End Method</Label>
                </FormGroup>
                <FormGroup>
                  <Label>Goal *</Label>
                  <Input placeholder="$0.00 USD"></Input>
                </FormGroup>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default CampaignAddNew;
