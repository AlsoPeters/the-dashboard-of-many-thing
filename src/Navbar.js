import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const Navbar = () => {
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/weather'>Weather</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/movies'>Movies</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/books'>Books</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/jokes'>Jokes</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
