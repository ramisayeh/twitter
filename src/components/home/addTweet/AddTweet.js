import React, { useState } from "react";
import "antd/dist/antd.css";
import { Skeleton, Switch, Card, Avatar, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./AddTweet.css";
import db from "../../../firebase";
import {
  CameraTwoTone
} from '@ant-design/icons';
import { storage } from "../../../firebase";
import firebase from "firebase";
const { Meta } = Card;


export default function AddTweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  
  const sendTweet = (e) => {
    e.preventDefault();
              if (image) {
                const uploadTask = storage.ref(`images/${image.name}`).put(image);
          
                uploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    // progress function .....
                    const progress = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                  },
                  (error) => {
                    // Error function...
                    console.log(error);
                    alert(error.message);
                  },
                  () => {
                    // upload complete function
                    storage
                      .ref("images")
                      .child(image.name)
                      .getDownloadURL()
                      .then((url) => {
                        db.collection("posts").add({
                          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: tweetMessage,
                    ImageUrl: url,
                    userName: "ramisayeh",
                    avatar:
                      "https://images.pexels.com/photos/7099638/pexels-photo-7099638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  });
                      });
          
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                    var preview1 = document.getElementById("image-1-preview");
                    }
          );
        }
      
    

    setTweetMessage("");
    setTweetImage("");
  };


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var src1 = URL.createObjectURL(e.target.files[0]);

      var preview1 = document.getElementById("image-1-preview");
    }
  };

  return (
    <div>
      <form>
        <Card
          id="card"
          title="Tweet somthing"
          style={{ width: 700 }}
          actions={[
            <div className="imageUpload">
            <div className="imageUpload__bottom">
              <div className="image-upload">
                <label htmlFor="file-input">
                <CameraTwoTone style={{ marginTop: "5px" }}  />       
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
            ,
            <Switch
              checkedChildren="public"
              unCheckedChildren="followers"
              defaultChecked
            />,
            <Button
              type="primary"
              onClick={sendTweet}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Tweet
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                actions={[]}
              />
            }
          />
          <Input
            placeholder="what's up ?"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </Card>
      </form>
    </div>
  );
}
