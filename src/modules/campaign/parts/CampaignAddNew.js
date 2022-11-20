import React, { useEffect, useMemo, useState } from "react";
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
import * as axios from "axios";
import Button from "../../../components/common/Button";
import DropdownInput from "../../../components/dropdown/DropdownInput";
import { toast } from "react-toastify";
// Quill.register("modules/imageUploader", ImageUploader);
import DateInput from "../../../components/input/DateInput";
import { apiURL, imgbbAPI } from "../../../config/config";
import ImageUpload from "../../../components/image/ImageUpload";
const CampaignAddNew = () => {
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState("");
  const [image, setImage] = useState("")
  useEffect(() => {
    async function fetchCountry() {
      const response = await axios.get(
        `https://restcountries.com/v2/regionalbloc/asean`
      );
      setCountries(
        response.data.map((item) => {
          return { label: item.name, key: item.name };
        })
      );
    }
    fetchCountry();
  }, []);
  const categories = [
    {
      label: "Architecture",
      key: "Architecture",
    },
    {
      label: "Film",
      key: "Film",
    },
    {
      label: "Home",
      key: "Home",
    },
    {
      label: "Education",
      key: "Education",
    },
    {
      label: "Camera",
      key: "Camera",
    },
    {
      label: "Food",
      key: "Food",
    },
    {
      label: "Comics",
      key: "Comics",
    },
    {
      label: "Clothes",
      key: "Clothes",
    },
    {
      label: "Real Estate",
      key: "Real Estate",
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
            const bodyFormData = new FormData();
            bodyFormData.append("image", file);
            const response = await axios({
              method: "post",
              url: imgbbAPI,
              data: bodyFormData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            return response.data.data.url;
          },
        },
      },
    }),
    []
  );

  const handleAddNewCampaign = async (values) => {
    try {
      console.log(values)
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        category: category,
        endMethod: method,
        country: country,
        image: image,
      });
      // toast.success("ADD SUCCESSFULLY");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        // category: category,
        story: "",
        goal: "",
        raisedAmount: "",
        amountPrefilled: "",
        video: "",
        // endMethod: method,
        // country: country,
        startDate: "",
        endDate: "",
      }}
      validationSchema={Yup.object({
        // title: Yup.string().required("Vui Lòng Điền Trường Này"),
        // story: Yup.string().required("Vui Lòng Điền Trường Này"),
        // description: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
        handleAddNewCampaign(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <Form className="pb-5 text-center">
            <Heading2>Start a Campaign</Heading2>
            <div className="flex gap-8 ">
              <FormGroup className="flex-1">
                <Label htmlFor="title">Campaign title</Label>
                <Input
                  name="title"
                  placeholder="Write a title *"
                  error={errors.title && touched.title ? errors.title : ""}
                  onChange={(e) => setFieldValue("title", e.target.value)}
                ></Input>
              </FormGroup>
              <FormGroup className="flex-1">
                <Label htmlFor="category">Select a category *</Label>
                <DropdownInput
                  setItem={setCategory}
                  data={categories}
                  item={category}
                  // name="category"
                ></DropdownInput>
              </FormGroup>
            </div>
            <FormGroup>
              <Label htmlFor="image"></Label>
              <ImageUpload onChange={setImage} name='Name'></ImageUpload>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="desctiption">Short Description *</Label>
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
              <Label htmlFor="story">Story *</Label>
              <Field name="story">
                {({ field }) => (
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    value={field.value}
                    onChange={field.onChange(field.name)}
                    placeholder="Write your story"
                    className="border outline-none hover:border-blue-400 durration-200"
                  />
                )}
              </Field>
            </FormGroup>
            <div className="flex gap-8 mb-5">
              <div className="flex-1">
                <FormGroup>
                  <Label htmlFor="goal">Goal *</Label>
                  <Input
                    placeholder="$0.00 USD"
                    onChange={(e) => setFieldValue("goal", e.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="amountPrefilled">Amount Prefilled</Label>
                  <Input
                    placeholder="Amount Prefilled"
                    onChange={(e) =>
                      setFieldValue("amountPrefilled", e.target.value)
                    }
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="method">Campaign End Method</Label>
                  <DropdownInput
                    // name="method"
                    data={methods}
                    item={method}
                    setItem={setMethod}
                  ></DropdownInput>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="startDate">Start Date</Label>
                  <DateInput
                    onChange={(date, dateString) =>
                      setFieldValue("startDate", dateString)
                    }
                  />
                </FormGroup>
              </div>
              <div className="flex-1">
                <FormGroup>
                  <Label htmlFor="raisedAmount">Raised Amount *</Label>
                  <Input
                    placeholder="$0.00 USD"
                    onChange={(e) =>
                      setFieldValue("raisedAmount", e.target.value)
                    }
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="video">Video</Label>
                  <Input
                    placeholder="Video"
                    onChange={(e) => setFieldValue("video", e.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <DropdownInput
                    // name="country"
                    data={countries}
                    item={country}
                    setItem={setCountry}
                  ></DropdownInput>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="endDate">End Date</Label>
                  <DateInput
                    onChange={(date, dateString) =>
                      setFieldValue("endDate", dateString)
                    }
                  />
                </FormGroup>
              </div>
            </div>
            <Button type="submit" primary>
              Submit new campaign
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CampaignAddNew;
