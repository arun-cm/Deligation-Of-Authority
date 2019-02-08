import React, { Component } from "react";
import { Divider } from "semantic-ui-react";

class Footer extends Component {

    render() {
        return (
            <>
                <Divider horizontal className="doa-footer">made with <span style={{ 'color': 'red' }}> ❤ </span>hexion web presence </Divider>
            </>
        );
    }
}

export default Footer