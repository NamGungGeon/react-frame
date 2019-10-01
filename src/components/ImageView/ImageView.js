import React, {Component} from 'react';
import PropTypes from 'prop-types';
import empty from '../../res/empty.png';
import style from './ImageView.module.css';

class ImageView extends Component {
    static defaultProps= {
        img: empty,
        shape: 'square',
        border: '0.6px solid #33333300',
        shadow: true,
        width: 0,
    };
    static propTypes= {
        img: PropTypes.string,
        shape: PropTypes.oneOf(['square', 'circleSquare', 'circle']),
        border: PropTypes.string,
        shadow: PropTypes.bool,
        width: PropTypes.number,
    };

    render() {
        const {img, shape, border, width, shadow}= this.props;
        return (
            <img src={img} alt={'ImageView'} className={style[shape]+ ` ${shadow? 'shadowing': ''}`}
                style={{
                    border: border,
                    width: width,
                    height: 'auto'
                }}/>
        );
    }
}

export default ImageView;