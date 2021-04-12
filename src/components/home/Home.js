import React, { useState, useEffect } from 'react'
import Content from './homeContent/Content';
import './Home.css'
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import db from "../../firebase";



export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);


    return (
        <div>
            
            
            <Row>
      <Col span={12}>{posts.map((post) => (
          <Content
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}</Col>
    </Row>
        </div>
    )
}
