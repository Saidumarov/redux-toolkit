import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const { Header, Sider, Content } = Layout;
const Sitebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const root = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //
  const sitebar = [
    {
      title: "Todo app",
      key: "/",
      label: "Todo app",
      icon: <GiTeacher />,
    },
  ];

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Sider className="home" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={sitebar}
          onClick={(e) => root(e.key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="header"
        >
          <div className="flex">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h2>Todo app</h2>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sitebar;
