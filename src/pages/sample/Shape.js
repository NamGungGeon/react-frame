import React, {Component} from 'react';
import ImageViewGroup from "../../containers/ImageViewGroup/ImageViewGroup";
import {randStr} from "../../lib/utils";
import PageTitle from "../../components/PageTitle/PageTitle";
import simpleIcon from '../../res/empty.png';
import {quickConnect} from "../../redux";

class Shape extends Component {
    icons= [
        {img: simpleIcon,name: 'square', shape: 'square', onClick: ()=>{this.props.uiKit.toaster.cooking('Ouch!')}},
        {img: simpleIcon, name: 'circleSquare', shape: 'circleSquare',onClick: ()=>{this.props.uiKit.toaster.cooking('Ouch!')}},
        {img: simpleIcon, name: 'circle', shape: 'circle', onClick: ()=>{this.props.uiKit.toaster.cooking('Ouch!')}},
    ]
    render() {
        return (
            <div>
                <PageTitle title={'Image Shapes'} explain={'ref!'} centering/>
                <ImageViewGroup icons={this.icons}/>
            </div>
        );
    }
}

export default quickConnect(Shape);