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
import Button from "../../../components/common/Button";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");
  const [country, setCountry] = useState("");
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
  const methods = [
    {
      label: "Method 1",
      key: "Method 1",
    },
    {
      label: "Method 2",
      key: "Method 2",
    },
    {
      label: "Method 3",
      key: "Method 3",
    },
  ];
  const countries = [
    {
      label: "Viet Nam",
      key: "Viet Nam",
    },
    {
      label: "US",
      key: "US",
    },
    {
      label: "UK",
      key: "UK",
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
        goal: "",
        raisedAmount: "",
        amountPrefilled: "",
        video: "",
        endMethod: method,
        country: country,
        startDate: "",
        endDate: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Vui Lòng Điền Trường Này"),
        story: Yup.string().required("Vui Lòng Điền Trường Này"),
        description: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {}}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <div className="pb-5 text-center">
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
            <div className="flex gap-8 mb-5">
              <div className="flex-1">
                <FormGroup>
                  <Label>Goal *</Label>
                  <Input placeholder="$0.00 USD" onChange={(e) => setFieldValue("goal", e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Amount Prefilled</Label>
                  <Input placeholder="Amount Prefilled" onChange={(e) => setFieldValue("amountPrefilled", e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Campaign End Method</Label>
                  <DropdownInput
                    name="method"
                    data={methods}
                    item={method}
                    setItem={setMethod}
                  ></DropdownInput>
                </FormGroup>
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input placeholder="Start Date" onChange={(e) => setFieldValue("startDate", e.target.value)}></Input>
                </FormGroup>
              </div>
              <div className="flex-1">
                <FormGroup>
                  <Label>Raised Amount *</Label>
                  <Input placeholder="$0.00 USD" onChange={(e) => setFieldValue("raisedAmount", e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Video</Label>
                  <Input placeholder="Video" onChange={(e) => setFieldValue("video", e.target.value)}></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Country</Label>
                  <DropdownInput
                    name="country"
                    data={countries}
                    item={country}
                    setItem={setCountry}
                  ></DropdownInput>
                </FormGroup>
                <FormGroup>
                  <Label>End Date</Label>
                  <Input placeholder="End Date" onChange={(e) => setFieldValue("endDate", e.target.value)}></Input>
                </FormGroup>
              </div>
            </div>
            <Button type="submit" primary>Submit new campaign</Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default CampaignAddNew;
