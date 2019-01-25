import React, { Component } from 'react';
import UsersProps, { UserDispatches } from '../../types/user/userProps';

import { DetailsList } from 'office-ui-fabric-react';

type MyProps = UsersProps & UserDispatches & any

const listItems: any = [];


class Users extends Component<MyProps> {

    constructor(prop: any) {
        super(prop);

        this.props.users.map((user: any) => {
            listItems.push({
                id: user.id,
                name: user.name,
                role: user.role
            });
        });
    }

    render() {
        return (
            <div className="container">
                <DetailsList
                    items={listItems}
                    onActiveItemChanged={(item) => { this.props.selectedUser(item) }}
                />
            </div>
        );
    }
}

export default Users;