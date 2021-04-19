import React from 'react'
import { Menu } from 'antd';
import './DropDown.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';
import firebase from 'firebase';
const { SubMenu } = Menu;

const DropDown =()=> {

 const handleLogout =()=>{
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('Successfully logged out');
          window.location.href = "/";
        })
        .catch(error => {
          alert(error.message);
          window.location.href = "/";
        });
    
}
 
    
    return (
      <Menu id='menu' mode="horizontal">
       
        <SubMenu key="SubMenu" icon={<CaretDownOutlined />} title="Profile">
        
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">My profile</Menu.Item>
            <Menu.Item key="setting:2">Group chat</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Setting</Menu.Item>
            <Menu.Item key="setting:4" onClick={handleLogout}  > <LogoutOutlined />Logout</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  
}

export default DropDown ;