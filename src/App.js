import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Weather</Menu.Item>
          <Menu.Item>Movies</Menu.Item>
          <Menu.Item>Books</Menu.Item>
          <Menu.Item>Jokes</Menu.Item>
          {/* {new Array(4).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })} */}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        AlsoStark ©2021 Created by AlsoPeters and Stark
      </Footer>
    </Layout>
  );
}

export default App;
