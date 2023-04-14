import React, { useState } from "react";
import MyDropzoneBasic from "./Drop";

function InputImage({ image, setImage }) {
  const [preview, setPreview] = useState("");
  const imageDeleteButton = (e) => {
    e.preventDefault();
    setImage("");
  };

  return (
    <div className="bg-gray-500 w-52 h-48 relative">
      {image === "" ? (
        <MyDropzoneBasic setImage={setImage} setPreview={setPreview} />
      ) : (
        <div>
          <button
            onClick={imageDeleteButton}
            className="w-6 h-6 bg-red-600 absolute top-2 right-2"
          >
            delate
          </button>
          <img src={preview}></img>
        </div>
      )}
    </div>
  );
}

export default InputImage;
