import React from "react";
import "./Content.css";
import { Divider } from "antd";
import { HeartOutlined, CommentOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Input, Space } from "antd";
const { Search } = Input;
const style = { padding: "8px 0", display: "flex", justifyContent: "center" };

const onSearch = (value) => console.log(value);

export default function Content() {
  return (
    <div className='contentContainer'>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: "590px" }}
        />
        <div className="tweetEntry-tweetHolder">
          {/* Entry with Media turned on. */}
          <div className="tweetEntry">
            <div className="tweetEntry-content">
              <a className="tweetEntry-account-group" href="[accountURL]">
                <img
                  className="tweetEntry-avatar"
                  src="http://placekitten.com/200/200"
                  alt=""
                />
                <strong className="tweetEntry-fullname">[fullname]</strong>
                <span className="tweetEntry-username">
                  @<b>[username]</b>
                </span>
                <span className="tweetEntry-timestamp">- [timestamp]</span>
              </a>
              <div className="tweetEntry-text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quam ipsum, finibus ac est sed, vestibulum condimentum neque.
                Sed eget iaculis.
              </div>
            </div>
            <div className="optionalMedia">
              <img
                className="optionalMedia-img"
                src="http://placekitten.com/500/400"
                alt=""
              />
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
                  <div style={style}>
                    <CommentOutlined />
                    Comment
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div style={style}>col-6</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
}
