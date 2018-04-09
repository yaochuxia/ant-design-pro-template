import React from 'react';
import Sidebar from '../components/Sidebar/sidebar';
import Topbar from '../components/Topbar/topbar';
import { connect } from 'dva';
import { Table, Icon, Tooltip } from 'antd';

function TableList({ location }) {
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',

    }, {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        render: (text) => (<a href={text} target="_blank">{text}</a>)
    }, {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle',
    }];
    let { data, loading } = this.props.users;
    let pagination = this.props.test.pagination;
    return (
        <div>
            <Sidebar />
            <div id="rightWrap">
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    )
}
export default connect()(TableList);
