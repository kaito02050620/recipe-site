import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzoneBasic(props) {
  const [dropImage, setDropImage] = useState("");

  const handleAcceptedFiles = (files) => {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = () => {
      setDropImage(reader.result);
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png" || "image/jpeg" || "image/jpg",
    multiple: false,
    onDrop: (acceptedFiles) => {
      handleAcceptedFiles(acceptedFiles);
    },
  });

  useEffect(() => {
    props.setImage(dropImage);
    props.setPreview(dropImage);
  }, [props.setImage, dropImage]);

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <p>
          ファイルをここにドラッグアンドドロップするか、
          クリックしてファイルを選択してください
        </p>
      </div>
    </div>
  );
}

export default MyDropzoneBasic;
