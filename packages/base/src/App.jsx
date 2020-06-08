import React, { lazy, Suspense, useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Switch, Route, useHistory, Redirect } from "react-router";

const { Content, Sider, Header } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const toggle = () => setCollapsed(!collapsed);
  return (
    <Layout className="layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['list']}
          onSelect={({ key }) => {
            history.push(`/${key}`)
          }}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          <Menu.Item key="list">list</Menu.Item>
          <Menu.Item key="add">add</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
          className="site-layout-background"
        >
          <Suspense fallback={(<div>loading</div>)}>
            <Switch>
              <Route path="/list" />
              <Route path="/add" component={lazy(() => import('add_item/AddItem'))}></Route>
              <Redirect to="/list" />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;