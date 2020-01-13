import React from 'react'
import { Timeline, Col, Divider, Row } from 'antd';
import LoadingWraper from "../../../Shared/LoadingWrapper"


const Cursus = ({ loading, employee }) => {
    const oneRowItemSkeleton = (loading, active = true) => ({
        active,
        title: { rows: 1, width: '80%' },
        paragraph: true,
        loading,
    })
    return (<Col
        span={20}
        className="antCol"
    >

        <Row>
            <Divider > <h4 className="education">Education</h4></Divider>

        </Row>
        <Row>
            <LoadingWraper skeletonConfig={oneRowItemSkeleton(loading)}>

                <Timeline>
                    {employee.education && employee.education.map((e, i) =>
                        <Timeline.Item color="green" key={i}><h1 className="bold ">
                            School degree:
                            <span className="purple">
                                {e.degree}
                            </span>
                        </h1>
                            <h1 className="bold ">
                                School field Of Study:
                                <span className="purple">
                                    {e.fieldOfStudy}
                                </span>
                            </h1>
                            <h1 className="bold ">
                                School from:
                                <span className="purple">
                                    {e.from}
                                </span>
                            </h1>
                            <h1 className="bold ">
                                School to:
                                <span className="purple">
                                    {e.to}
                                </span>
                            </h1></Timeline.Item>
                    )}
                </Timeline>
            </LoadingWraper>
        </Row>
    </Col>)
}




export default Cursus