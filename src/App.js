
import './App.css';
import {Route} from "react-router-dom";
import VerticalNavigation from "./containers/Navigation/VerticalNavigation";

import React, {Component} from 'react';
import {UiBundle} from "./lib/ui";
import {quickConnect} from "./redux";
import {getPath} from "./lib/url";
import Sample from "./pages/sample/Sample";
import Guide from "./pages/guide/Guide";

class App extends Component {
    state= {};

    componentDidMount() {
        console.log(this.props);

        this.props.UIKitDispatcher.init(UiBundle(this));
        this.props.RouterDispatcher.init(this.props.history);
    }


    render() {
        return (
            <div>
                {
                    this.props.uiKit? this.props.uiKit.render(): ''
                }
                <VerticalNavigation/>
                <div className={'fullDisplay'}>
                    <div className={'guideLine'}>
                        <Route path={getPath("/sample")} component={Sample}/>
                        <Route path={getPath("/guide")} component={Guide}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default quickConnect(App);
