import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Explore.css";
import SideBar from "./exploreSideBar/SideBar";
import Conteentt from "./exploreContent/Content";
import { Row, Col } from "antd";
import { Affix, Button } from 'antd';

export default function Explore() {

  return (
    <div className="con">
      <Row>
      <Affix offsetTop={4} onChange={affixed => console.log(affixed)}>
      <SideBar Style= {{}}/>
      </Affix>
      <Col span={12} Style= {{display: 'flex'}}><Conteentt /></Col>
    </Row>
    </div>
  );
}
