import React, { useEffect } from 'react'
import { Table, Dropdown, Layout, Icon, Menu, Popconfirm, message, Avatar } from 'antd';
import { Link } from "react-router-dom"
import AddEmp from "../AddEmp"
import EditEmp from "../EditEmp"
import LoadingWraper from "../../Shared/LoadingWrapper"



const EmpList = (props) => {
    const { employee, fetchEmployee, loading, deleteEmployee } = props
    const { Content } = Layout;
    useEffect(() => {
        fetchEmployee()
    }, [])

    const confirm = (e) => {
        deleteEmployee(e)
        message.success('Success');
    }

    // const cancel = (e) => {
    //     message.error('Click on No');
    // }

    var randomColor = () => ('#' + Math.floor(Math.random() * 16777215).toString(16))

    const menu = (e, obj) => (
        <Menu>
            <Menu.Item key="0">
                {/* <Modal edit={true} id={id} data={obj} /> */}
                <EditEmp obj={obj} />
            </Menu.Item>
            <Menu.Item key="1" onClick={() => confirm(e)} >
                {/* <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={() => {
                        message.success("Click on Yes");
                    }}
                    onCancel={() => message.error('Click on No')}
                    okText="Yes"
                    cancelText="No"
                > */}
                <span>Delete</span>
                {/* </Popconfirm> */}
            </Menu.Item>
        </Menu>
    );
    const columns = [
        {
            title: 'Employee',
            dataIndex: 'fullName',
            sorter: (a, b) => a.fullName.length - b.fullName.length,
            render: fullName => (
                <>
                    <Avatar style={{ color: '#000', backgroundColor: randomColor(), marginRight: "10px" }}>{fullName[0].toUpperCase()}</Avatar>
                    <span>{fullName.toUpperCase()}</span>{" "}
                </>
            ),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'departement',
            dataIndex: 'departement',
            filters: [
                {
                    text: 'Engineering',
                    value: 'Engineering',
                },
                {
                    text: 'Education',
                    value: 'Education',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.departement.indexOf(value) === 0,
            sorter: (a, b) => a.departement.length - b.departement.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: "action",
            fixed: 'right',
            width: 100,
            render: (id, obj) =>

                <Dropdown overlay={() => menu(id, obj)} trigger={['click']} >

                    <Icon type="ellipsis" />
                </Dropdown>

        },
        {
            title: '',
            dataIndex: 'id',
            key: "profile",
            fixed: 'right',
            width: 100,
            render: (id, obj) =>


                <Link
                    to={{
                        pathname: `/employee/${id}`, obj
                    }}
                >  Profile</Link>

        }
    ];


    const oneRowItemSkeleton = (loading, active = true) => ({
        active,
        title: { rows: 1, width: '80%' },
        paragraph: true,
        loading,
    })
    console.log("object", employee)
    return (


        <LoadingWraper skeletonConfig={oneRowItemSkeleton(loading)}>
            <Layout >
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                    <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
                        <AddEmp />

                        <Table rowKey={record => record.id} columns={columns} dataSource={employee} />
                    </div>
                </Content>
            </Layout>
        </LoadingWraper>
    )
}

export default EmpList




