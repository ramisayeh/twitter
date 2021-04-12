import React from "react";
import "antd/dist/antd.css";
import { Skeleton, Switch, Card, Avatar, Input } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./AddTweet.css";


const { Meta } = Card;
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    
  ],
};



export default function AddTweet() {
  return (
    <div>
      <Card
        id="card"
        title="Tweet somthing"
        style={{ width: 700 }}
        actions={[
          <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>,
            <Switch checkedChildren="public" unCheckedChildren="followers" defaultChecked />,
            <Button type="primary">Tweet</Button>,
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
        <Input placeholder="what's up ?" />
      </Card>
    </div>
  );
}
