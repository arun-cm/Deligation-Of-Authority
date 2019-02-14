import React, { Component } from "react";
import { Input, Menu, Segment, Grid, Divider, Accordion, Form, Icon, } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Actionlog from '../actionlog/actionlogs';

import Body from '../layout/body';


class Navbar extends Component {
    state = { activeItem: 'home', activeIndex: 0 }

    handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name })

    handleClick = (e: any, titleProps: any) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeItem, activeIndex } = this.state

        return (
            <>
                <Grid>
                    <Grid.Column width={2}>
                        <Menu fluid tabular stackable vertical>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/users'
                            />

                            <Menu.Item
                                name='Request new spending'
                                active={activeItem === 'Request new spending'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/request'

                            />
                            <Menu.Item
                                name='FAQ'
                                active={activeItem === 'FAQ'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/faq'
                            />

                            <Menu.Item
                                name='more'
                                active={activeItem === 'more'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/more'
                            >
                                Filter By

                                <Accordion>
                                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                        <Icon name='dropdown' />
                                        Approved
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0} >

                                        <p onClick={() => { alert('By Name') }}><i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* By Name</i></p>
                                        <p onClick={() => { alert('Overview') }}><i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* Overview</i></p>
                                        <p><i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* By Company</i></p>

                                    </Accordion.Content>
                                </Accordion>
                                <Accordion>
                                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                        <Icon name='dropdown' />
                                        In Process
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 1}>
                                        <p onClick={() => { alert('By Name') }}><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* By Name</i></p>
                                        <p><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* By Approver</i></p>
                                    </Accordion.Content>
                                </Accordion>
                                <Accordion>
                                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                        <Icon name='dropdown' />
                                        Archived
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 2}>
                                        <i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;* Overview</i>
                                    </Accordion.Content>
                                </Accordion>

                            </Menu.Item>



                            <Menu.Item
                                name='Deligation of Authority'
                                active={false}
                                className='right floated header'
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/users'
                                disabled
                                style={{ "marginTop": "170%" }}
                            />



                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={14}>
                        <Segment className="doa-shadow">
                            <Body />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default Navbar;