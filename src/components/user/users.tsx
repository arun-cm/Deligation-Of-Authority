import React, { Component } from 'react';
import UsersProps, { UserDispatches } from '../../types/user/userProps';

import { DetailsList } from 'office-ui-fabric-react';
import { Table, Label, Menu, Icon } from 'semantic-ui-react';

import User from '../../containers/user/user';

type MyProps = UsersProps & UserDispatches & any

class Users extends Component<MyProps> {

    render() {
        return (
            <div className="container">
                <Table basic='very'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Active</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.props.users.map((user: any) => {
                                return (
                                    <Table.Row key={user.id} >
                                        <Table.Cell>
                                            <Label ribbon>{user.id}</Label>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <a style={{ 'cursor': 'pointer' }}
                                                onClick={() => { this.props.selectedUser(user) }} >{user.name}</a>
                                        </Table.Cell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell>{user.active == true ? 'Yes' : 'No'}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a' className="active" onClick={() => { this.props.nextUsers(1) }}>1</Menu.Item>
                                    <Menu.Item as='a' onClick={() => { this.props.nextUsers(2) }}>2</Menu.Item>
                                    <Menu.Item as='a' onClick={() => { this.props.nextUsers(3) }}>3</Menu.Item>
                                    <Menu.Item as='a' onClick={() => { this.props.nextUsers(4) }}>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>

                <User />
            </div>
        );
    }
}

export default Users;