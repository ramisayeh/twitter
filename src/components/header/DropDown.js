import React from 'react'
import { Menu } from 'antd';
import './DropDown.css'
import { CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class DropDown extends React.Component {
 
  render() {
    
    return (
      <Menu id='menu' onClick={this.handleClick} mode="horizontal">
       
        <SubMenu key="SubMenu" icon={<CaretDownOutlined />} title="Profile">
        
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">My profile</Menu.Item>
            <Menu.Item key="setting:2">Group chat</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Setting</Menu.Item>
            <Menu.Item key="setting:4"> <LogoutOutlined />Logout</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default DropDown ;