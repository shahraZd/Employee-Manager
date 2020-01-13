import React from 'react'
import { Layout } from 'antd';
import gomycode from "../../../assets/GoMyCode.png"

const Header = () => {
    const { Header } = Layout;

    return (
        <Header style={{ background: '#fff', padding: 0 }} >
            <img src={gomycode} alt="logo" style={{ width: "250px" }} />
        </Header>
    )
}
export default Header 