import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Explore.css";
import SideBar from "./exploreSideBar/SideBar";
import Conteentt from "./exploreContent/Content";
import { Row, Col } from "antd";

export default function Explore() {

  return (
    <div className="con">
      <Row>
      <SideBar Style= {{}}/>
      <Col span={12} Style= {{display: 'flex'}}><Conteentt /></Col>
    </Row>
    </div>
  );
}
