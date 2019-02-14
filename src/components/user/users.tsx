import React, { Component } from 'react';
import UsersProps, { UserDispatches } from '../../types/user/userProps';

import { DetailsList, getIcon } from 'office-ui-fabric-react';
import { Table, Label, Menu, Icon } from 'semantic-ui-react';

import User from '../../containers/user/user';

type MyProps = UsersProps & UserDispatches;

class Users extends Component<MyProps> {

    state = {
        currentPage: 1,
        sortColumn: 'Name',
        sortOrder: 'ASC'
    };

    handleSort = (e: any, sortColumn: string) => {
        this.setState(
            {
                currentPage: 1,
                sortOrder: this.state.sortOrder == "ASC" ? "DESC" : "ASC",
                sortColumn: sortColumn
            },
            () => {
                this.props.nextUsers(this.state.currentPage, this.state.sortColumn, this.state.sortOrder);
            }
        );
        // this.state.currentPage
        // this.state.sortOrder
        // example 
        // this.setState((prevState) => ({ nextIndex: (prevState.nextIndex + 1) }));
        //

        //this.props.nextUsers(1, this.state.sortColumn, this.state.sortOrder == "ASC" ? "DESC" : "ASC");
    }

    getSortIcon(column: string): any {
        if (this.state.sortColumn == column && this.state.sortOrder == "ASC") {
            return 'arrow down';
        }
        else if (this.state.sortColumn == column && this.state.sortOrder == "DESC")
            return 'arrow up';
        else
            return "arrow down"
    }

    render() {
        return (
            <div className="container">
                <Table basic='very' selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell># UID </Table.HeaderCell>
                            <Table.HeaderCell onClick={(e: any) => { this.handleSort(e, "Name") }}>
                                <Icon name={this.getSortIcon("Name")} />
                                Name
                            </Table.HeaderCell>
                            <Table.HeaderCell onClick={(e: any) => { this.handleSort(e, "Email") }}>
                                <Icon name={this.getSortIcon("Email")} />
                                Email</Table.HeaderCell>
                            <Table.HeaderCell onClick={(e: any) => { this.handleSort(e, "Active") }}>
                                <Icon name={this.getSortIcon("Active")} />
                                Active
                                </Table.HeaderCell>
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
                                    <Menu.Item as='a' className={this.state.currentPage == 1 ? "active" : ""} onClick={() => { this.setState({ currentPage: 1 }); this.props.nextUsers(1, this.state.sortColumn, this.state.sortOrder) }}>1</Menu.Item>
                                    <Menu.Item as='a' className={this.state.currentPage == 2 ? "active" : ""} onClick={() => { this.setState({ currentPage: 2 }); this.props.nextUsers(2, this.state.sortColumn, this.state.sortOrder) }}>2</Menu.Item>
                                    <Menu.Item as='a' className={this.state.currentPage == 3 ? "active" : ""} onClick={() => { this.setState({ currentPage: 3 }); this.props.nextUsers(3, this.state.sortColumn, this.state.sortOrder) }}>3</Menu.Item>
                                    <Menu.Item as='a' className={this.state.currentPage == 4 ? "active" : ""} onClick={() => { this.setState({ currentPage: 4 }); this.props.nextUsers(4, this.state.sortColumn, this.state.sortOrder) }}>4</Menu.Item>
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