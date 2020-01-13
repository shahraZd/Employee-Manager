import React, { useState } from 'react'
import uuid from "uuid/v1"
import {
    Modal, Button, Form,
    Input,
    Radio,
    Icon,
    Cascader,
    Select,

    DatePicker,

} from 'antd';


const { Option } = Select;

const education = [
    {

        value: 'school',
        label: 'school',
        children: [
            {
                value: 'bachelor',
                label: 'Bachelor',
                children: [
                    {
                        value: 'computerScience',
                        label: 'Computer Science',
                    },
                ],
            },
        ],
    },
    {
        value: 'university',
        label: 'university',
        children: [
            {
                value: 'master',
                label: 'Master',
                children: [
                    {
                        value: 'mediaEngineering',
                        label: 'Media Engineering',
                    },
                ],
            },
        ],
    },
];

const RegistrationForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                props.addEmployee({
                    id: uuid(),
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    birthDate: values.birthDate,
                    hireDate: values.hireDate,
                    title: values.title,
                    departement: values.departement,
                    education: values.education
                })

                props.close()
            }
        });
    };




    const { getFieldDecorator } = props.form;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '216',
    })(
        <Select style={{ width: 70 }}>
            <Option value="216">+216</Option>
        </Select>,
    );


    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item
                label="full Name"

            >
                {getFieldDecorator('fullName', {
                    rules: [{ required: true, message: 'Please input Employee\'s Full Name!', whitespace: true }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input />)}
            </Form.Item>



            <Form.Item label="Phone Number">
                {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input employee\'s phone number!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>

            <Form.Item label="birthDate">
                {getFieldDecorator('birthDate', config)(<DatePicker />)}
            </Form.Item>
            <Form.Item label="hireDate">
                {getFieldDecorator('hireDate', config)(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Departement">
                {getFieldDecorator('departement')(
                    <Radio.Group>
                        <Radio value="Engineering">Engineering</Radio>
                        <Radio value="Education">Education</Radio>
                        <Radio value="Marketing">Marketing</Radio>
                        <Radio value="Sales">Sales</Radio>

                    </Radio.Group>
                )}
            </Form.Item>
            <Form.Item
                label="Title"

            >
                {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please input Employee\'s Title!', whitespace: true }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Education">
                {getFieldDecorator('education', {
                    initialValue: ['school', 'bachelor', 'computerScience'],
                    rules: [
                        { type: 'array', required: true, message: 'Please select Employee\'s education!' },
                    ],
                })(<Cascader options={education} />)}
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Add
            </Button>
            </Form.Item>
        </Form>
    );

}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const AddEmp = ({ addEmployee }) => {
    const [visible, setVisible] = useState(false)

    // const { getFieldDecorator, validateFieldsAndScroll } = props.form;
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //             getFieldDecorator(values)
    //         }
    //     });
    // }
    return (
        <div>

            <Button type="default " onClick={() => setVisible(true)}>
                Add
        <Icon type="plus" />
            </Button>
            <Modal
                footer={null}
                // footer={[
                //     <Button key="back" onClick={() => setVisible(false)}>
                //         Return
                //     </Button>,
                //     <Button key="submit" type="primary" htmlType="submit" onClick={handleSubmit}>
                //         Submit
                //     </Button>,
                // ]}

                title="Title"
                visible={visible}
                // onOk={handleSubmit}
                // confirmLoading={confirmLoading}
                onCancel={() => setVisible(false)}
            >
                <WrappedRegistrationForm addEmployee={addEmployee} close={() => setVisible(false)} />
            </Modal>
        </div>
    )
}

export default Form.create({ name: 'register' })(AddEmp)


