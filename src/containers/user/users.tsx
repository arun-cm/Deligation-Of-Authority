import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Users from '../../components/user/users';
import UsersProps, { UserDispatches } from '../../types/user/userProps'

import selectedUser from '../../actions/index'

type MyProps = UsersProps & UserDispatches & any


function mapStateToProps(state: any) {
    return {
        users: state.users,
    };
}

function matchDispatchToProps(dispatch: any) {
    return bindActionCreators({
        selectedUser
    }, dispatch)
}


export default connect<MyProps>(mapStateToProps, matchDispatchToProps)(Users);