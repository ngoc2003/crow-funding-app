import React from "react";
import Button from "../../../components/common/Button";
import Input from "../../../components/input/Input";
const CampaignSupport = () => {
  return (
    <>
      <h4 className="mb-5 font-semibold text-black">Support</h4>
      <div className="flex flex-col gap-5 bg-white rounded-md shadow-md p-7">
        <h4 className="text-xl text-center text-text3">
          Pledge without reward
        </h4>
        <Input placeholder="$10"></Input>
        <div className="text-sm bg-[#F7F7F7] p-5  rounded-md">
          <h4 className="pb-3 font-semibold text-text2">
            Back it because you beleive in it.
          </h4>
          <p className="text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button fluid secondary>
          Continue
        </Button>
      </div>
    </>
  );
};

export default CampaignSupport;
