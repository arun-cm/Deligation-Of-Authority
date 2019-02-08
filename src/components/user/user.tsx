import React, { Component } from 'react';
import { IUser } from '../../types/user/userProps';
import { Card, Icon, Image } from 'semantic-ui-react'

//import { Icon, Header, Image, Modal } from 'semantic-ui-react'

import logo from '../../images/manavatar.png'

type MyProps = IUser & any;



class User extends Component<MyProps> {
    state = {
        open: true
    }

    onClose = (e: any) => {
        this.setState({ open: false })
    }

    render() {
        if (this.props.user) {
            return (
                <Card>
                    <Image src={logo} />
                    <Card.Content>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'> User ID : {this.props.user.id}</span>
                        </Card.Meta>
                        <Card.Description>Email : {this.props.user.email}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            {/* <Icon name='user' />
                            {Math.floor(Math.random() * 50) + 20} Friends */}
                        </a>
                    </Card.Content>
                </Card>


                // <Modal open={this.state.open} onClose={this.onClose} >
                //     <Modal.Header>User details</Modal.Header>
                //     <Modal.Content image>
                //         <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                //         <Modal.Description>
                //             <Header>{this.props.user.name}</Header>
                //             <p>User ID : {this.props.user.id}</p>
                //             <p>Email : {this.props.user.email}</p>
                //         </Modal.Description>
                //     </Modal.Content>
                // </Modal>

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