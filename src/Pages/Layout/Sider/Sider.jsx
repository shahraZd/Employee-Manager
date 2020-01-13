import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom"


const Sider = () => {
    const { Sider } = Layout;

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="home" />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to="/employee">
                        <Icon type="team" />
                        <span className="nav-text">Employee</span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    )
}

export default Sider