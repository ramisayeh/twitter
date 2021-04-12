import React, { Component }  from 'react'
import { Menu } from 'antd';
import './SideBar.css'



export default class SideBar extends Component {

    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
<div style={{ display:'flex', justifyContent:'flex-end', zIndex: 3, margin: '95px 0px 0px'}}>
<div style={{ width: 190, display:'flex', justifyContent:'flex-end' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          Style={{display:'flex', justifyContent:'flex-end'}}
        >
          <Menu.Item key="1" >
            Tweets
          </Menu.Item>
          <Menu.Item key="2" >
            Tweets & Replies
          </Menu.Item>
          <Menu.Item key="3" >
            Media
          </Menu.Item>
          <Menu.Item key="4" >
            Likes
          </Menu.Item>
        </Menu>
      </div>
</div>

        )
    }
}

