import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a href="http://www.alipay.com/">用户中心</a>
        </Menu.Item>
        <Menu.Item>
            <a href="http://www.taobao.com/">系统配置</a>
        </Menu.Item>
        <Menu.Item>
            <a href="http://www.tmall.com/">退出</a>
        </Menu.Item>
    </Menu>
);

export default class Logout extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hi 姚楚霞<Icon type="down" />
                </a>
            </Dropdown>
        )
    }
}