import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
// import React, {useState} from "react"
import Mycard from './com/Card/Card'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';


const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Mail</Menu.Item>
        <Menu.Item key="3">Setting</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        < Mycard />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;





