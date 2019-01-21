import React, { Component, Props } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface UserProps {
    users: any
}

//const test : React.SFC

class Users extends Component<UserProps> {

    render() {
        return (
            <ul>
                {
                    this.props.users.map((user: any) => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        users: state.users
    };
}

export default connect<UserProps>(mapStateToProps)(Users);