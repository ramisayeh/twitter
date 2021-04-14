import React, { useState } from "react";
import "antd/dist/antd.css";
import { Skeleton, Switch, Card, Avatar, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddTweet.css";
import db from "../../../firebase";
import Upload from './Upload'

const { Meta } = Card;


export default function AddTweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "rami sayeh ",
      username: "ramisayeh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.pexels.com/photos/7099638/pexels-photo-7099638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div>
      <form>
        <Card
          id="card"
          title="Tweet somthing"
          style={{ width: 700 }}
          actions={[
            <Upload/>
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
