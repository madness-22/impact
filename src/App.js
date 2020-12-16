import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React, {useState} from "react"
import Mycard from './com/Card/Card'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import Calendarr from "./com/setting/Setting";



const { Header, Content, Footer } = Layout;
function App() {
  const [activeTab,setActiveTab] = useState(Mycard);

  const switchTab =(o)=>{
    console.log(o.key)
    switch (o.key) {
      case 'Profile':
        
        break;
      case 'Feed':
        
        break;
      case 'Cards':
        setActiveTab(Mycard)
        break;
      case 'Setting':
        setActiveTab(Calendarr)
        break;
      default:
        break;
    }
  }
  
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu onClick={switchTab} theme="dark" mode="horizontal" defaultSelectedKeys={['Cards']}>
        <Menu.Item key="Profile">Profile</Menu.Item>
        <Menu.Item key="Feed">Feed</Menu.Item>
        <Menu.Item key="Cards">Cards</Menu.Item>
        <Menu.Item key="Setting">Calendar</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {activeTab}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;





