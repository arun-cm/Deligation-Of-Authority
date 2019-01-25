import User from '../../components/user/user';
import { connect } from 'react-redux';
import { IUser } from '../../types/user/userProps';

type MyProps = IUser & any;

function mapStateToProps(state: any) {
    return {
        user: state.user
    }
}

export default connect<MyProps>(mapStateToProps)(User);