import React, { useState, useEffect } from 'react'
import Content from './homeContent/Content';
import './Home.css'
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import db from "../../firebase";
import AddTweet from './addTweet/AddTweet'


export default function Home({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // this is where the code runs
      db.collection("posts").onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
        
      });
    }, []);
    return (
        <div>
              <Row  >
      <Col style={{margin:'100px 0px 0px 0px'}} span={12}><AddTweet/></Col>
    </Row>
            <Row style={{margin:'2px 6px 12px 101px'}}>
      <Col span={12}>{posts.map(({ id, post }) => (
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
    )
}
