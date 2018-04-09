import React from 'react';
import { Menu, Icon } from 'antd';
import ReactDOM from 'react-dom';
import './sidebar.css';

const SubMenu = Menu.SubMenu;
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: document.cookie.split(";")[0].split("=")[1]
        }
    };
    changeCookie(v) {
        document.cookie = "nowKey=" + v;
        console.log("v", v);
    };

    handleClick(e) {
        console.log('click ', e);
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if (e.k == "home") {
            location.href = '/'
        } else if (e.k == 'list') {
            location.href = '/list'
        }
    };
    render() {
        return (
            <div className='leftMenu'>
                {/* <img src={require('../assets/logo.png')} width='50' /> */}
                <Menu
                    onClick={this.handleClick}
                    theme="light"
                    mode="vertical"
                    selectedKeys={[this.state.current]}
                    style={{ width: 146 }}
                >
                    <Menu.Item key="home"><Icon type="home" />首页</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>导航一</span></span>}>
                        <Menu.Item key="list">子导航一</Menu.Item>
                        <Menu.Item key="report">子导航二</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user"><Icon type="user" />用户中心</Menu.Item>
                    <Menu.Item key="setting"><Icon type="setting" />系统配置</Menu.Item>
                </Menu>
            </div>
        )
    }
}