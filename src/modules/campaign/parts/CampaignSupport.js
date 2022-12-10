import React from "react";
import Button from "../../../components/common/Button";
import Input from "../../../components/input/Input";
const CampaignSupport = ({onClick =() => {}}) => {
  return (
    <>
      <h4 className="mb-5 font-semibold text-black dark:text-white">Support</h4>
      <div className="flex flex-col gap-5 bg-white rounded-md shadow-md p-7 dark:bg-darkSecondary">
        <h4 className="text-xl text-center text-text3">
          Pledge without reward
        </h4>
        <Input placeholder="$10"></Input>
        <div className="text-sm bg-[#F7F7F7] p-5  rounded-md dark:bg-darkbg">
          <h4 className="pb-3 font-semibold text-text2 dark:text-white">
            Back it because you beleive in it.
          </h4>
          <p className="text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button onClick={onClick} fluid secondary>
          Continue
        </Button>
      </div>
    </>
  );
};

export default CampaignSupport;
