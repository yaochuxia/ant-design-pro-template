import { Table, Button } from 'antd';
import { connect } from 'dva';

const UserTable = ({ list, dispatch }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'NAME',
            dataIndex: 'name'
        },
        {
            title: 'AGE',
            dataIndex: 'age'
        }
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={list}
                rowKey={t => t.id}
                pagination={false}>
                {/* users datatable */}
            </Table>

        </div>
    )
}

export default connect(({ user }) => {
    return {
        list: user.list
    };
})(UserTable);