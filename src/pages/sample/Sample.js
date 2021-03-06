

import React, {Component} from 'react';
import PolaroidsZone from "./PolaroidsZone";
import {Route} from "react-router-dom";
import {getPath} from "../../lib/url";
import List from "./List";
import Login from "./Login";
import UIKitZone from "./UIKitZone";
import NotDev from "./NotDev";
import Shape from "./Shape";

class Sample extends Component {
    render() {
        const {match}= this.props;
        console.log(getPath(`${match.url}/polaroids`));
        return (
            <div>
                <Route exact path={getPath(`${match.url}/`)} component={List}/>
                <Route exact path={getPath(`${match.url}/polaroids`)} component={PolaroidsZone}/>
                <Route exact path={getPath(`${match.url}/login`)} component={Login}/>
                <Route exact path={getPath(`${match.url}/uikit`)} component={UIKitZone}/>
                <Route exact path={getPath(`${match.url}/deving`)} component={NotDev}/>
                <Route exact path={getPath(`${match.url}/shape`)} component={Shape}/>
            </div>
        );
    }
}

export default Sample;