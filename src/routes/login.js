import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { browserHistory } from 'react-router';

//import styles from './login.css';

const FormItem = Form.Item;

class Login extends React.Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem label="姓名">
                        <Input type="user_name" placeholder="请输入您的用户名" {...getFieldProps('user_name')} />
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')} />
                    </FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Login = Form.create({})(Login);
