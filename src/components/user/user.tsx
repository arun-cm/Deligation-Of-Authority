import React, { Component } from 'react';
import { IUser } from '../../types/user/userProps';

type MyProps = IUser & any;


class User extends Component<MyProps> {
    render() {
        if (this.props.user) {
            return (
                <div className="container">
                    <h1> User Details - ID : {this.props.user.id}</h1>
                    <h2> {this.props.user.name}</h2>
                    <h3> {this.props.user.role}</h3>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default User;