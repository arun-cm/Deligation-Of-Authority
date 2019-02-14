import React, { Component } from "react";
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class AddUser extends Component {

    constructor(props: any) {
        super(props);

    }

    state = {
        value: 'sm',
        error: false,
        agreed: false
    }

    handleChange = (e: any, { value }: any) => this.setState({ value })

    handleValidate = (e: any) => {
        debugger;
        var x = this.refs.firstname;

        this.setState({ error: true })
    }

    handleUserAgremnt = (e: any) => {
        this.setState({ agreed: !this.state.agreed })
    }

    handleInputChange = (e: any) => {
        console.log(e.target);
    }

    render() {
        const { value } = this.state

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input ref="firstname" fluid label='First name' placeholder='First name' required error={this.state.error} onChange={this.handleInputChange} />
                    <Form.Input ref="lastname" fluid label='Last name' placeholder='Last name' required error={this.state.error} onChange={this.handleInputChange} />
                    <Form.Select ref="gender" fluid label='Gender' options={options} placeholder='Gender' />
                </Form.Group>
                <Form.Group inline>
                    <label>Size</label>
                    <Form.Radio
                        label='Small'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Medium'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Large'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.TextArea label='About' placeholder='Tell us more about you...' ref="about" />
                <Form.Checkbox label='I agree to the Terms and Conditions' error={!this.state.agreed}
                    onChange={this.handleUserAgremnt} />

                <Form.Button disabled={!this.state.agreed} onClick={this.handleValidate}>Save </Form.Button>
            </Form>
        );
    }
}

export default AddUser;