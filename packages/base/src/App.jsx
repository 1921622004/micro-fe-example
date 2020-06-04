import React, { lazy, Suspense } from "react";
import { Layout, Menu } from "antd";
import { Switch, Route } from "react-router";

const { Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        className="site-layout-background"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: '0 50px' }}>
          <Suspense fallback={(<div>loading</div>)}>
            <Switch>
              <Route path="/add" component={lazy(() => import('add_item/AddItem'))}></Route>
            </Switch>
          </Suspense>

        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App;