import React, { useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
import LoadingWraper from "../../../Shared/LoadingWrapper"
import {
    Col, Row
} from 'antd';
import profile from "../../../assets/profile.png"
import "./style.scss";

const Profile = (props) => {
    const { loading, fetchEmployee, location } = props
    const employee = location.obj || props.employee
    useEffect(() => {
        fetchEmployee()
    }, [])
    const oneRowItemSkeleton = (loading, active = true) => ({
        active,
        title: { rows: 1, width: '80%' },
        paragraph: true,
        loading,
    })
    return (

        <Row type="flex" className="layout">
            <Col span={7} className="antCol" >
                <LoadingWraper skeletonConfig={oneRowItemSkeleton(loading)}>
                    <div >
                        <img
                            src={profile}
                            alt="profile"
                            className="logo-profile"
                        ></img>
                    </div>
                    <h1 className="bold ">
                        Name: <span className="purple">{employee.fullName}</span>
                    </h1>
                    <h1 className="bold ">
                        Email: <span className="purple">{employee.email}</span>
                    </h1>
                </LoadingWraper>
            </Col>

            <Col span={15} className="antCol">
                <LoadingWraper skeletonConfig={oneRowItemSkeleton(loading)}>
                    <h1 className="bold ">
                        Full Name:{" "}
                        <span className="purple">{employee.fullName}</span>
                    </h1>
                    <h1 className="bold ">
                        Email: <span className="purple">{employee.email}</span>
                    </h1>
                    <h1 className="bold ">
                        Phone: <span className="purple">{employee.phone}</span>
                    </h1>
                    <h1 className="bold ">
                        Birth Date:{" "}
                        <span className="purple">{employee.birthDate}</span>
                    </h1>
                    <h1 className="bold ">
                        Title: <span className="purple">{employee.title}</span>
                    </h1>
                    <h1 className="bold ">
                        Departement:{" "}
                        <span className="purple">{employee.departement}</span>
                    </h1>
                </LoadingWraper>
            </Col>
        </Row>

    )
}

export default Profile