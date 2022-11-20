import axios from "axios";
import React, { useEffect, useState } from "react";
import { imgbbAPI } from "../../config/config";
import Input from "../input/Input";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const [imagePreview, setImagePreview] = useState(""); // preview image update
  function handleSetPreview(image) {
    try {
      image.preview = URL.createObjectURL(image);
    } catch (err) {
      console.log(err);
    }
    setImagePreview(image);
  }
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleSetPreview(file);
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
    onChange(response.data.data.url);
  };
  useEffect(() => {
    return () => {
      imagePreview && URL.revokeObjectURL(imagePreview.preview);
    };
  }, [imagePreview]);
  return (
    <>
      <Input onChange={handleChange} type="file"></Input>
      {imagePreview && (
        <div className="flex items-center justify-center p-5 border rounded-xl">
          <img
            src={imagePreview.preview && imagePreview.preview}
            alt=""
            width="300px"
          />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
