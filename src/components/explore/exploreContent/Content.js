import React, { useState, useEffect } from "react";
import "./Content.css";
import { Divider } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import Content from '../../home/homeContent/Content';
import { Row, Col } from "antd";
import { Input, Space } from "antd";
import db from "../../../firebase"  ;


const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function Contentt() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // this is where the code runs
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) =>  ({ id: doc.id, post: doc.data() })));
      
    });
  }, []);

  return (
    <div>
    <Row  >
</Row>
  <Row >
<Col span={12}>{posts.map(({ id, post }) => (
<Content
key={id}
id={id}
avatar={post.avatar}
userName={post.userName}
ImageUrl={post.ImageUrl}
caption={post.caption}
comments={post.comments}
/>
))}</Col>
</Row>
</div>
  );
}
