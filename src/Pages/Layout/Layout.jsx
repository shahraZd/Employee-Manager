import React from 'react'
import { Layout } from 'antd';
import Sider from "./Sider"
import Header from "./Header"
import Footer from "./Footer"

const layout = (props) => {
    const { children } = props
    return (

        <Layout>
            <Sider />
            <Layout style={{ marginLeft: 200 }}>
                <Header />
                {children}
                <Footer />
            </Layout>
        </Layout>
    )
}
export default layout