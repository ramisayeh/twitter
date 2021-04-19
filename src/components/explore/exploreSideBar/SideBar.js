import React, { Component }  from 'react'
import { Menu} from 'antd';
import './SideBar.css'


export default class SideBar extends Component {

    state = {
        collapsed: false,
        navbar: 'top'
      };
    handleTodle =()=>{
      if(this.navbar === 'top'){
        this.setState({ navbar: 'latest' })
      }
        this.setState({ navbar: 'top' })
      localStorage.setItem("navbar", this.state.navbar);
    }
     
    render() {
        return (
<div style={{ display:'flex', justifyContent:'flex-end', zIndex: 1, margin: '95px 0px 0px' }}>
<div style={{ width: 190, display:'flex', justifyContent:'flex-end' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          Style={{display:'flex', justifyContent:'flex-end'}}
        >
          <Menu.Item key="1"  onClick={this.handleTodle}>
            Top
          </Menu.Item>
          <Menu.Item key="2" onClick={this.handleTodle}>
            Latest
          </Menu.Item>
          <Menu.Item key="3" >
            People
          </Menu.Item>
          <Menu.Item key="4" >
            Media
          </Menu.Item>
        </Menu>
      </div>
</div>

        )
    }
}

