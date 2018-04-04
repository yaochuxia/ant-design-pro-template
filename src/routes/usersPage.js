import { connect } from 'dva';
import Main from '../components/layout/content';
import UserTable from '../components/user/user';

const UserPage = () => {

    return (
        <Main>
            <h1>UserPage</h1>
            <UserTable />
        </Main>
    );
};

export default connect()(UserPage);