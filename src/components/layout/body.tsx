import React, { Component } from "react";

import Users from '../../containers/user/users';
import Actionlog from '../../components/actionlog/actionlogs';
import Error from '../../components/layout/error';
import { Switch, Route } from "react-router-dom";
import AddUser from "../user/addUser";


class Body extends Component {

    render() {
        return (
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/faq" component={Actionlog} />
                <Route path="/request" component={AddUser} />
            </Switch>
        );
    }
}

export default Body;