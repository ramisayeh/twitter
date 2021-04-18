import React, { forwardRef, useState, useEffect } from "react";
import "./Content.css";
import { Divider } from "antd";
import { HeartOutlined, CommentOutlined, SaveTwoTone } from "@ant-design/icons";
import { Row, Col } from "antd";
import CommentInput from "../comment/Commentinput";
import Comment from "../comment/comment";
import db from "../../../firebase";

const style = { display: "flex", justifyContent: "center" };

const Content = forwardRef(
  
  ({ userName, caption, ImageUrl, avatar, timestamp, comments, id }, ref) => {
    const [saved, setSaved] = useState("true");
    const [commentNumbe, setCommentNumber]= useState()

    const handleSave=()=>{
     
  
      db.collection("posts")
        .doc(id)
        .update({
          saves: saved,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
  
        setSaved("true");
    }

    return (
      <div className="contentContainer" ref={ref}>
        <div className="tweetEntry-tweetHolder">
          <div className="tweetEntry">
            <div className="tweetEntry-content">
              <a className="tweetEntry-account-group" href="[accountURL]">
                <img className="tweetEntry-avatar" alt=""src={avatar} />
                <strong className="tweetEntry-fullname">{userName}</strong>
                <strong className="tweetEntry-fullname">{timestamp}</strong>
              </a>
              <div className="tweetEntry-text-container">{caption}</div>
            </div>
            <div className="optionalMedia">
              <img className="optionalMedia-img" src={ImageUrl} alt="" />
            </div>
            <Divider />
            <div>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                  <div style={style}>
                    <HeartOutlined />
                    Like
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>
                    <button onClick={handleSave} style={{backgroundColor: 'white', }}>
                    <SaveTwoTone />
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        {comments ? (
        comments.map((comment) => (
          <Comment  comment={comment.comment} />
        ))
      ) : (
        <></>
      )}
      <CommentInput comments={comments} id={id}  />
      </div>
    );
  }
);

export default Content;
