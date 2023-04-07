import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzoneBasic(props) {
  const [changeBase64Image, setChangeBase64Image] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setChangeBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    props.setImage(changeBase64Image);
  }, [props.setImage, changeBase64Image]);

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
