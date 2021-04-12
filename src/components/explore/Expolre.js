import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Explore.css";
import SideBar from "./exploreSideBar/SideBar";
import Conteent from "./exploreContent/Content";
import { Row, Col } from "antd";

export default function Explore() {

  return (
    <div className="con">
      <Row>
      <Col span={12}> <SideBar Style= {{}}/></Col>
      <Col span={12}><Conteent /></Col>
    </Row>
    </div>
  );
}
