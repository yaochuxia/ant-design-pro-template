import React from 'react';
import { Form, Input, Button, Icon, notification } from 'antd';
import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import './login.css';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this)
    };
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let n = values.username;
                let p = values.password;
                if (n === 'admin' && p === '888888') {
                    // 表单的路由处理    
                    document.cookie = "nowKey=" + "home";
                    location.href = '/'
                } else {
                    this.openNotificationWithIcon('info');
                }
            }
        });
    };
    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon(type) {
        return notification[type]({
            message: '用户名&&密码',
            description: '用户名：admin，密码：888888',
            duration: 6

        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginBox">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请您输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请你输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="888888" />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Login = Form.create({})(Login);
