import React from "react";
import logo from "../newsapp_icon.png";
import "./leftcomponent.css";
import {Link} from 'react-router-dom';

import {Layout, Row, Menu, Button} from 'antd';
const { Header, Footer, Content, Sider } = Layout;

function LeftComponent() {
    return (
        <Layout style={{ height:"100%" }}>
            <Layout>
                <Header style={{ backgroundColor: "white" }}>
                    <Row>
                        <p>
                            <img src={logo} height={"30px"} width={"30px"} />
                        </p>
                        <h2 style={{ marginLeft: "10px" }}>NewsApp</h2>
                    </Row>
                </Header>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ height:"100%" }}>
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/add">Add Articles</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/setting">Settings</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/saved">Saved Articles</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/logout">Log Out</Link>
                    </Menu.Item>
                </Menu>
            </Layout>
        </Layout>
    );
}

export default LeftComponent;