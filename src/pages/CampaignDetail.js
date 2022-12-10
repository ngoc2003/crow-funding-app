import React, { useState } from "react";
import { useCallback } from "react";
import ReactModal from "react-modal";
import Button from "../components/common/Button";
import IconClose from "../components/icons/IconClose";
import Input from "../components/input/Input";
import CampaignView from "../modules/campaign/parts/CampaignView";

const CampaignDetail = () => {
  const [open, setOpen] = useState(false);
  const handleSetOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <div>
      <ReactModal
        isOpen={open}
        overlayClassName={
          "modal-overlay fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center "
        }
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        className="modal-content w-full max-w-[521px] dark:bg-darkbg bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden"
      >
        <button
          onClick={() => setOpen(false)}
          className="float-right w-6 h-6 duration-300 dark:hover:text-white text-text1"
        >
          <IconClose></IconClose>
        </button>
        <h2 className="clear-both mb-10 text-2xl font-bold text-center dark:text-white ">
          Back this project
        </h2>
        <p className="mb-3 text-sm dark:text-text3">
          Enter the contribute amount
        </p>
        <Input placeholder="$10"></Input>
        <p className="my-3 text-sm text-text3">
          Contribution are not asscociated with perks
        </p>
        <Button fluid primary>
          Continue
        </Button>
      </ReactModal>
      <CampaignView setShowModal={handleSetOpen}></CampaignView>
    </div>
  );
};

export default CampaignDetail;
