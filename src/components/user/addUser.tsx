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

    validateFields = (e: any) => {
        this.setState({ error: true })
    }

    handleUserAgremnt = (e: any) => {
        this.setState({ agreed: !this.state.agreed })
    }

    render() {
        const { value } = this.state

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' required error={this.state.error} />
                    <Form.Input fluid label='Last name' placeholder='Last name' error={this.state.error} />
                    <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
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
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Form.Checkbox label='I agree to the Terms and Conditions' error={!this.state.agreed}
                    onChange={this.handleUserAgremnt} />

                <Form.Button disabled={!this.state.agreed} onClick={this.validateFields}>Save </Form.Button>
            </Form>
        );
    }
}

export default AddUser;