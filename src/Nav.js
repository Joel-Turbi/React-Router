import React from 'react';
import logo from './logo.svg'; import './App.css';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import { isMobileDevice } from 'rc-menu/lib/util';

function Nav() {
  return (


    <Menu mode="horizontal">
     
        <Menu.Item key="mail">
        <Link to='/about'>
          <Icon type="compass" />
          About
          </Link>
        </Menu.Item>


      <Menu.Item key="shop">
      <Link to='/shop'>
        <Icon type="shop" />
        Shop
        </Link>
        </Menu.Item>

      <Menu.Item key="home">
      <Link to='/' >
        <Icon type="home" />
       Home
       </Link>
        </Menu.Item>

    </Menu>

  );
}

export default Nav;