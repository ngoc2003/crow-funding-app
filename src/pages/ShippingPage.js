import React, { useState } from "react";
import Checkbox from "../components/checkbox/Checkbox";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import ContributionSummury from "../modules/payment/ContributionSummury";
import Payment from "../modules/payment/Payment";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DropdownInput from "../components/dropdown/DropdownInput";

const ShippingPage = () => {
  const [country, setCountry] = useState("");
  const [remember, setRemember] = useState(false);

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
  return (
    <div className="flex items-start w-full gap-x-[74px]">
      <div className="flex-1">
        <h2 className="font-bold text-[30px] leading-normal mb-10">
          Shipping Address
        </h2>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            country: "",
            street: "",
            city: "",
            postalCode: "",
            phone: "",
            remember: remember,
          }}
          validationSchema={Yup.object({})}
          onSubmit={(values) => {}}
        >
          {({ errors, touched, setFieldValue }) => {
            return (
              <>
                <div className="flex gap-x-5">
                  <FormGroup className={"flex-1"}>
                    <Label>First Name *</Label>
                    <Input
                      placeholder="John"
                      onChange={(e) =>
                        setFieldValue("firstName", e.target.value)
                      }
                    ></Input>
                  </FormGroup>
                  <FormGroup className={"flex-1"}>
                    <Label>Last Name *</Label>
                    <Input
                      placeholder="Doe"
                      onChange={(e) =>
                        setFieldValue("lastName", e.target.value)
                      }
                    ></Input>
                  </FormGroup>
                </div>
                <FormGroup>
                  <Label>Country</Label>
                  <DropdownInput
                    name="country"
                    data={countries}
                    item={country}
                    setItem={setCountry}
                  ></DropdownInput>
                </FormGroup>
                <div className="flex gap-x-5">
                  <FormGroup className={"flex-1"}>
                    <Label>Street Adress *</Label>
                    <Input
                      placeholder="Le Hong Phong"
                      onChange={(e) => setFieldValue("street", e.target.value)}
                    ></Input>
                  </FormGroup>
                  <FormGroup className={"flex-1"}>
                    <Label>City *</Label>
                    <Input
                      placeholder="Ha Noi"
                      onChange={(e) => setFieldValue("city", e.target.value)}
                    ></Input>
                  </FormGroup>
                </div>
                <div className="flex gap-x-5">
                  <FormGroup className={"flex-1"}>
                    <Label>Postal Code *</Label>
                    <Input
                      placeholder="123456"
                      onChange={(e) =>
                        setFieldValue("postalCode", e.target.value)
                      }
                    ></Input>
                  </FormGroup>
                  <FormGroup className={"flex-1"}>
                    <Label>Phone Number *</Label>
                    <Input
                      placeholder="0123456789"
                      onChange={(e) => setFieldValue("phone", e.target.value)}
                    ></Input>
                  </FormGroup>
                </div>
              </>
            );
          }}
        </Formik>
        <div className="flex items-center gap-x-5 mb-11">
          <Checkbox
            name="remember"
            checked={remember}
            onClick={() => setRemember(!remember)}
          >
            Remember this address for next time use
          </Checkbox>
        </div>
        <h2 className="font-bold text-[30px] leading-normal mb-10">Payment</h2>
        <Payment></Payment>
      </div>
      <div className="flex-1 max-w-[462px] ml-auto">
        <ContributionSummury></ContributionSummury>
      </div>
    </div>
  );
};

export default ShippingPage;
