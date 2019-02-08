import React, { Component } from "react";
import { Input, Menu, Segment, Grid, Divider } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Actionlog from '../actionlog/actionlogs';

class Navbar extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Grid>
                    <Grid.Column width={16}>
                        <Menu fluid tabular>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/users'
                            />
                            <Menu.Item
                                name='action log'
                                active={activeItem === 'action log'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/actionlog'
                            />
                            <Menu.Item
                                name='Add User'
                                active={activeItem === 'Add User'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/adduser'
                            />
                            <Menu.Item
                                name='more'
                                active={activeItem === 'more'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/more'
                            />
                            <Menu.Item
                                name='Deligation of Authority'
                                active={false}
                                className='right floated header'
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/users'
                                disabled
                            />
                        </Menu>
                    </Grid.Column>
                    {/* <Grid.Column width={12} >
                        <Menu fluid tabular>
                            <Menu.Item name='Deligation of Authority' />
                        </Menu>
                    </Grid.Column> */}

                    {/* <Grid.Column stretched width={12}>
                        <Segment>
                            This is an stretched grid column. This segment will always match the tab height
                        </Segment>
                    </Grid.Column> */}
                </Grid>

                {/* <Menu pointing>

                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/users' />

                    <Menu.Item
                        name='action log'
                        active={activeItem === 'action log'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/actionlog'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' style={{ width: 300 }} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu> */}

                {/* <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <Link to='/users' className="item">
                            Home
                        </Link>
                        <Link className="item" to='/actionlog'>
                            Action Log
                        </Link>
                        <a className="item active">
                            Friends
                        </a>
                    </div>
                </div> */}

            </>
        );
    }
}

export default Navbar;