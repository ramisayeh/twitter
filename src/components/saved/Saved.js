import React from "react";
import "antd/dist/antd.css";
import "./Saved.css";
import { Row, Col } from "antd";
import SideBar from "./savedSideBar/SideBar";
import Conteent from "./savedContent/Content";

export default function Saved () {


  return (
    <div className='con'>
       <Row>
      <Col span={12}> <SideBar Style= {{}}/></Col>
      <Col span={12}><Conteent /></Col>
    </Row>
    </div>
  );
}
