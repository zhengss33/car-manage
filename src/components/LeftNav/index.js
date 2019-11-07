import React, { Component }  from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  state = {
    collapsed: false,
  };

  componentWillMount () {
    const menuListNode = this.renderMenu(menuList);

    this.setState({
      menuListNode
    })
  };

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children && item.children.length) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item key={item.key}>
          { item.icon ? <Icon type={item.icon}/> : ''}
          <span>{item.title}</span>
        </Menu.Item>
      )
    })
  }

  handleClick = (e) => {
    console.log('click', e);
  };

  render() {
    return (
      <div className="menu">
        <div className="nav-header">
          <Icon className="logo" type="reddit" />
          <h1 className="title">React car</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          mode="vertical"
          theme="dark"
        >
          {this.state.menuListNode}
        </Menu>
      </div>
    )
  }
}