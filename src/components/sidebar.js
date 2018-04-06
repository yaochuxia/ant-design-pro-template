import React from 'react';
import { Menu, Icon } from 'antd';
import ReactDOM from 'react-dom';
import './sidebar.css';

const SubMenu = Menu.SubMenu;
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    };
    handleClick(e) {
        console.log('click ', e);
    };
    render() {
        return (
            <div className='leftMenu'>
                {/* <img src={require('../assets/logo.png')} width='50' /> */}
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 146 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="home" /><span>首页</span></span>}></SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="bar-chart" /><span>导航</span></span>}>
                        <Menu.Item key="5">子菜单一</Menu.Item>
                        <Menu.Item key="6">子菜单二</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="user" /><span>用户中心</span></span>}>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统配置</span></span>}>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}