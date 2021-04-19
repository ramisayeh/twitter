import React, { useState, useEffect } from 'react'
import "antd/dist/antd.css";
import db from "../../firebase";
import "antd/dist/antd.css";
import "./Saved.css";
import { Row, Col } from "antd";
import SideBar from "./savedSideBar/SideBar";
import Content from './savedContent/Content';
import { Affix, Button } from 'antd';
export default function Saved () {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").where('saves', '==', 'true').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
      
    });
  }, []);
  return (
    <div className='con'>
    <Row>
      <Affix offsetTop={4} onChange={affixed => console.log(affixed)}>
      <SideBar Style= {{}}/>
      </Affix>
      <Col span={12} Style= {{display: 'flex'}}>{posts.map(({ id, post }) => (
          <Content
          key={id}
          id={id}
          avatar={post.avatar}
          userName={post.userName}
          ImageUrl={post.ImageUrl}
          caption={post.caption}
          comments={post.comments}
          likes={post.Likes}
          Number={post.Number}
          />
        ))}</Col>
    </Row>
    </div>
  );
}
