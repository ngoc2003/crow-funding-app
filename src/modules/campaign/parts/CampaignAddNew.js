import React, { useMemo } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReactQuill, { Quill } from "react-quill";
import FormGroup from "../../../components/common/FormGroup";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import "antd/dist/antd.css";
import { DownOutlined, UserOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown} from "antd";
let in4 = [
  {
    name: "email",
    label: "Email address *",
    placeholder: "example@gmail.com",
    icon: false,
  },
  {
    name: "password",
    label: "Password *",
    placeholder: "Type your own password here",
    icon: true,
  },
];

const CampaignAddNew = () => {
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
    },
  ];
  const handleMenuClick = (e) => {
    console.log(e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
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
        description: "",
        category: "",
        story: ""
      }}
      validationSchema={Yup.object({
        // categorize: Yup.string().required().oneOf(["Event", "Blog"]),
        title: Yup.string().required("Vui Lòng Điền Trường Này"),
        story: Yup.string().required("Vui Lòng Điền Trường Này"),
        description: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
        // handleSubmit(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <div>
            <div className="flex gap-8">
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
                <Dropdown menu={menuProps} style={{ display: "flex" }}>
                  <Button 
                    style={{
                      textAlign: "left",
                      height: "100% ",
                      color: "gray",
                      borderRadius: "12px",
                    }}
                  >
                    Select a category
                  </Button>
                </Dropdown>
              </FormGroup>
            </div>
            <FormGroup>

              <Label>Short Description *</Label>
              <Input name="description" placeholder="Write a short description" error={errors.description && touched.description ? errors.title : ""}
                  onChange={(e) => setFieldValue("description", e.target.value)}></Input>
            </FormGroup>
            <Button className="primary">Xin chào</Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default CampaignAddNew;
