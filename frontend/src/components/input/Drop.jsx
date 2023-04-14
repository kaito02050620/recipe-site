import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzoneBasic(props) {
  const [dropImage, setDropImage] = useState("");
  const [imagePath, setImagePath] = useState("");

  //取得した画像バス取得（DB格納）、エンコード化（一時的に表示）する
  const handleAcceptedFiles = useCallback((file) => {
    setImagePath(file[0].path);

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = () => {
      setDropImage(reader.result);
    };
  }, []);

  //取得画像のバリデーション
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      handleAcceptedFiles(acceptedFiles);
    },
  });

  useEffect(() => {
    props.setImage(imagePath);
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
