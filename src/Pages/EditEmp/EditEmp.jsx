import React, { useState, useEffect } from 'react'
import {
    Modal, Button, Form, Input, Radio,
    Icon,
    Cascader,
    Select,
    DatePicker,

} from 'antd';


// const { Option } = Select;

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

    const { getFieldDecorator, setFieldsValue } = props.form;
    const { obj } = props
    // console.log("edit props: ", props)
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                props.editEmployee(obj.id, {
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
            <Select.Option value="216">+216</Select.Option>
        </Select>,
    );


    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    useEffect(() => {
        obj && setFieldsValue(
            {
                fullName: obj.fullName,
                phone: obj.phone,
                email: obj.email,
                // birthDate: obj.birthDate,
                // hireDate: obj.hireDate,
                departement: obj.departement,
                title: obj.title,
                // education: obj.education
            }
        )
    }, [obj, setFieldsValue])
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
                    Save
            </Button>
            </Form.Item>
        </Form>
    );

}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const EditEmp = ({ editEmployee, obj }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div>

            <span onClick={() => setVisible(true)}>
                Edit
        <Icon type="edit" />
            </span>
            <Modal
                footer={null}
                title="Title"
                visible={visible}

                onCancel={() => setVisible(false)}
            >
                <WrappedRegistrationForm editEmployee={editEmployee} close={() => setVisible(false)} obj={obj} />
            </Modal>
        </div>
    )
}

export default Form.create({ name: 'register' })(EditEmp)


