import React from 'react'
import { Tabs, Icon } from 'antd';
import Cursus from "./Cursus"
import Profile from "./Profile/"
import { Link } from "react-router-dom"

const Description = (props) => {
    const { TabPane } = Tabs;
    console.log("desc", props.location.obj)
    function callback(key) {
        console.log(key);
    }
    return (
        <div>
            <Link to="/employee"><Icon type="arrow-left" /></Link>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Profile" key="1">
                    <Profile {...props} />
                </TabPane>
                <TabPane tab="Cursus" key="2">
                    <Cursus {...props} />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default Description
