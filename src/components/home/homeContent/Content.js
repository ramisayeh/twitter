import React, { forwardRef } from "react";
import "./Content.css";
import { Divider } from "antd";
import { HeartOutlined, CommentOutlined,  } from "@ant-design/icons";
import { Row, Col } from "antd"


const style = {  display: "flex", justifyContent: "center" };


const Content = forwardRef(
  ({ displayName, text, image, avatar }, ref) => {
  return (
    <div className='contentContainer' ref={ref}>
      
    <div className="tweetEntry-tweetHolder">
      <div className="tweetEntry">
        <div className="tweetEntry-content">
          <a className="tweetEntry-account-group" href="[accountURL]">
            <img
              className="tweetEntry-avatar"
              src={avatar} 
            />
            <strong className="tweetEntry-fullname">{displayName}</strong>
          </a>
          <div className="tweetEntry-text-container">
          {text}
          </div>
        </div>
        <div className="optionalMedia">
          <img
            className="optionalMedia-img"
            src={image}
            alt=''
          />
        </div>
        <Divider />
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <HeartOutlined />Like
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}><CommentOutlined />Comment</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

    
    </div>
    
  )
}
);

export default Content ;