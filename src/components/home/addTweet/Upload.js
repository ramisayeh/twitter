import React, { useState } from "react";
import { storage } from "../../../firebase";
import db from "../../../firebase";
import firebase from "firebase";
import { CameraTwoTone } from "@ant-design/icons";

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className="imageUpload">
      <div className="imageUpload__bottom">
        <div className="image-upload">
          <label htmlFor="file-input">
            <CameraTwoTone style={{ marginTop: "5px" }} />
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
export default ImageUpload;
